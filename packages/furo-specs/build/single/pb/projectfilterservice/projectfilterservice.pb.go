// Code generated by protoc-gen-go. DO NOT EDIT.
// source: projectfilterservice/projectfilterservice.proto

package projectfilterservice

import (
	projectfilter "../projectfilter"
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	_ "github.com/golang/protobuf/ptypes/empty"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type GetProjectfilterServiceRequest struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetProjectfilterServiceRequest) Reset()         { *m = GetProjectfilterServiceRequest{} }
func (m *GetProjectfilterServiceRequest) String() string { return proto.CompactTextString(m) }
func (*GetProjectfilterServiceRequest) ProtoMessage()    {}
func (*GetProjectfilterServiceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_112232342da9fbb7, []int{0}
}

func (m *GetProjectfilterServiceRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetProjectfilterServiceRequest.Unmarshal(m, b)
}
func (m *GetProjectfilterServiceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetProjectfilterServiceRequest.Marshal(b, m, deterministic)
}
func (m *GetProjectfilterServiceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetProjectfilterServiceRequest.Merge(m, src)
}
func (m *GetProjectfilterServiceRequest) XXX_Size() int {
	return xxx_messageInfo_GetProjectfilterServiceRequest.Size(m)
}
func (m *GetProjectfilterServiceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetProjectfilterServiceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetProjectfilterServiceRequest proto.InternalMessageInfo

func init() {
	proto.RegisterType((*GetProjectfilterServiceRequest)(nil), "projectfilterservice.GetProjectfilterServiceRequest")
}

func init() {
	proto.RegisterFile("projectfilterservice/projectfilterservice.proto", fileDescriptor_112232342da9fbb7)
}

var fileDescriptor_112232342da9fbb7 = []byte{
	// 203 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xd2, 0x2f, 0x28, 0xca, 0xcf,
	0x4a, 0x4d, 0x2e, 0x49, 0xcb, 0xcc, 0x29, 0x49, 0x2d, 0x2a, 0x4e, 0x2d, 0x2a, 0xcb, 0x4c, 0x4e,
	0xc5, 0x2a, 0xa8, 0x57, 0x50, 0x94, 0x5f, 0x92, 0x2f, 0x24, 0x82, 0x4d, 0x4e, 0x4a, 0x26, 0x3d,
	0x3f, 0x3f, 0x3d, 0x27, 0x55, 0x3f, 0xb1, 0x20, 0x53, 0x3f, 0x31, 0x2f, 0x2f, 0xbf, 0x24, 0xb1,
	0x24, 0x33, 0x3f, 0xaf, 0x18, 0xa2, 0x47, 0x4a, 0x11, 0x45, 0x0f, 0xaa, 0xe9, 0x50, 0x25, 0xd2,
	0x50, 0x03, 0xc0, 0xbc, 0xa4, 0xd2, 0x34, 0xfd, 0xd4, 0xdc, 0x82, 0x92, 0x4a, 0x88, 0xa4, 0x92,
	0x02, 0x97, 0x9c, 0x7b, 0x6a, 0x49, 0x00, 0xb2, 0xb6, 0x60, 0x88, 0xc5, 0x41, 0xa9, 0x85, 0xa5,
	0xa9, 0xc5, 0x25, 0x46, 0x1b, 0x19, 0xb9, 0x44, 0xb0, 0xc9, 0x0b, 0xcd, 0x60, 0xe4, 0x12, 0x40,
	0xd7, 0x2b, 0x64, 0xa2, 0x87, 0xd5, 0x83, 0xf8, 0xed, 0x90, 0x52, 0x42, 0xd5, 0xa5, 0x87, 0xa2,
	0xd6, 0x35, 0xaf, 0x24, 0xb3, 0xa4, 0x52, 0x49, 0xab, 0xe9, 0xf2, 0x93, 0xc9, 0x4c, 0x2a, 0x42,
	0x4a, 0xfa, 0xb9, 0xf9, 0xc9, 0xd9, 0x29, 0x89, 0x25, 0x89, 0x30, 0xdf, 0x16, 0xeb, 0x43, 0x7d,
	0x9f, 0x9e, 0x5a, 0xa2, 0x97, 0x55, 0x9c, 0x9f, 0x97, 0xc4, 0x06, 0xf6, 0x9c, 0x31, 0x20, 0x00,
	0x00, 0xff, 0xff, 0x72, 0xdd, 0xb8, 0xa3, 0x83, 0x01, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// ProjectfilterServiceClient is the client API for ProjectfilterService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type ProjectfilterServiceClient interface {
	// The Get method takes zero or more parameters, and returns a ProjectfilterEntity which contains a Projectfilter
	GetProjectfilter(ctx context.Context, in *GetProjectfilterServiceRequest, opts ...grpc.CallOption) (*projectfilter.ProjectfilterEntity, error)
}

type projectfilterServiceClient struct {
	cc *grpc.ClientConn
}

func NewProjectfilterServiceClient(cc *grpc.ClientConn) ProjectfilterServiceClient {
	return &projectfilterServiceClient{cc}
}

func (c *projectfilterServiceClient) GetProjectfilter(ctx context.Context, in *GetProjectfilterServiceRequest, opts ...grpc.CallOption) (*projectfilter.ProjectfilterEntity, error) {
	out := new(projectfilter.ProjectfilterEntity)
	err := c.cc.Invoke(ctx, "/projectfilterservice.ProjectfilterService/GetProjectfilter", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ProjectfilterServiceServer is the server API for ProjectfilterService service.
type ProjectfilterServiceServer interface {
	// The Get method takes zero or more parameters, and returns a ProjectfilterEntity which contains a Projectfilter
	GetProjectfilter(context.Context, *GetProjectfilterServiceRequest) (*projectfilter.ProjectfilterEntity, error)
}

// UnimplementedProjectfilterServiceServer can be embedded to have forward compatible implementations.
type UnimplementedProjectfilterServiceServer struct {
}

func (*UnimplementedProjectfilterServiceServer) GetProjectfilter(ctx context.Context, req *GetProjectfilterServiceRequest) (*projectfilter.ProjectfilterEntity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetProjectfilter not implemented")
}

func RegisterProjectfilterServiceServer(s *grpc.Server, srv ProjectfilterServiceServer) {
	s.RegisterService(&_ProjectfilterService_serviceDesc, srv)
}

func _ProjectfilterService_GetProjectfilter_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetProjectfilterServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProjectfilterServiceServer).GetProjectfilter(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/projectfilterservice.ProjectfilterService/GetProjectfilter",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProjectfilterServiceServer).GetProjectfilter(ctx, req.(*GetProjectfilterServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _ProjectfilterService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "projectfilterservice.ProjectfilterService",
	HandlerType: (*ProjectfilterServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetProjectfilter",
			Handler:    _ProjectfilterService_GetProjectfilter_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "projectfilterservice/projectfilterservice.proto",
}