package main

import (
	 "./__bundled"
	"flag"
	"github.com/golang/glog"
	"github.com/grpc-ecosystem/grpc-gateway/runtime"
	"golang.org/x/net/context"
	_ "google.golang.org/genproto/googleapis/rpc/errdetails"
	"google.golang.org/grpc"
	"log"
	"net/http"
	"os"
)

var (
	grpcserver = flag.String("grpcserver", os.Getenv("GRPC_SERVER_ADDRESS"), "grpc server for your services")
	gwserver = flag.String("gwserver", os.Getenv("GW_SERVER_ADDRESS"), "Address and port for the gateway")
)
// header für client ohne prefixes
func outgoingMatcher(headerName string) (mdName string, ok bool) {
	return headerName, true
}

// header vom client im ctx des Servers ohne prefixes senden
func incomingMatcher(headerName string) (mdName string, ok bool) {
	return headerName, true
}

func run() error {
	ctx := context.Background()
	ctx, cancel := context.WithCancel(ctx)
	defer cancel()

	mux := runtime.NewServeMux(runtime.WithOutgoingHeaderMatcher(outgoingMatcher), runtime.WithIncomingHeaderMatcher(incomingMatcher))
	opts := []grpc.DialOption{grpc.WithInsecure()}

	// Services hier einfügen
	// PersonService
	err := taskmanager.RegisterBundledServiceHandlerFromEndpoint(ctx, mux, *grpcserver, opts)
	if err != nil {
		return err
	}

	return http.ListenAndServe(*gwserver, mux)
}

func main() {

	flag.Parse()
	defer glog.Flush()

	logger := log.New(os.Stdout, "http: ", log.LstdFlags)
	logger.Println("Server is starting...")
	logger.Printf("Connecting to " + *grpcserver + " and listening on: " + *gwserver)
	if err := run(); err != nil {
		glog.Fatal(err)
	}
}
