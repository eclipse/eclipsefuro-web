// Code generated by protoc-gen-go. DO NOT EDIT.
// source: experimentservice/service.proto

package experimentservice

import (
	experiment "../experiment"
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	empty "github.com/golang/protobuf/ptypes/empty"
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

type CreateExperimentServiceRequest struct {
	Data                 *experiment.Experiment `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{}               `json:"-"`
	XXX_unrecognized     []byte                 `json:"-"`
	XXX_sizecache        int32                  `json:"-"`
}

func (m *CreateExperimentServiceRequest) Reset()         { *m = CreateExperimentServiceRequest{} }
func (m *CreateExperimentServiceRequest) String() string { return proto.CompactTextString(m) }
func (*CreateExperimentServiceRequest) ProtoMessage()    {}
func (*CreateExperimentServiceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_45927d3315488c55, []int{0}
}

func (m *CreateExperimentServiceRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateExperimentServiceRequest.Unmarshal(m, b)
}
func (m *CreateExperimentServiceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateExperimentServiceRequest.Marshal(b, m, deterministic)
}
func (m *CreateExperimentServiceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateExperimentServiceRequest.Merge(m, src)
}
func (m *CreateExperimentServiceRequest) XXX_Size() int {
	return xxx_messageInfo_CreateExperimentServiceRequest.Size(m)
}
func (m *CreateExperimentServiceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateExperimentServiceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_CreateExperimentServiceRequest proto.InternalMessageInfo

func (m *CreateExperimentServiceRequest) GetData() *experiment.Experiment {
	if m != nil {
		return m.Data
	}
	return nil
}

type DeleteExperimentServiceRequest struct {
	Exp                  string       `protobuf:"bytes,1,opt,name=exp,proto3" json:"exp,omitempty"`
	Data                 *empty.Empty `protobuf:"bytes,2,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{}     `json:"-"`
	XXX_unrecognized     []byte       `json:"-"`
	XXX_sizecache        int32        `json:"-"`
}

func (m *DeleteExperimentServiceRequest) Reset()         { *m = DeleteExperimentServiceRequest{} }
func (m *DeleteExperimentServiceRequest) String() string { return proto.CompactTextString(m) }
func (*DeleteExperimentServiceRequest) ProtoMessage()    {}
func (*DeleteExperimentServiceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_45927d3315488c55, []int{1}
}

func (m *DeleteExperimentServiceRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteExperimentServiceRequest.Unmarshal(m, b)
}
func (m *DeleteExperimentServiceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteExperimentServiceRequest.Marshal(b, m, deterministic)
}
func (m *DeleteExperimentServiceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteExperimentServiceRequest.Merge(m, src)
}
func (m *DeleteExperimentServiceRequest) XXX_Size() int {
	return xxx_messageInfo_DeleteExperimentServiceRequest.Size(m)
}
func (m *DeleteExperimentServiceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteExperimentServiceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteExperimentServiceRequest proto.InternalMessageInfo

func (m *DeleteExperimentServiceRequest) GetExp() string {
	if m != nil {
		return m.Exp
	}
	return ""
}

func (m *DeleteExperimentServiceRequest) GetData() *empty.Empty {
	if m != nil {
		return m.Data
	}
	return nil
}

type GetExperimentServiceRequest struct {
	Exp                  string   `protobuf:"bytes,1,opt,name=exp,proto3" json:"exp,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetExperimentServiceRequest) Reset()         { *m = GetExperimentServiceRequest{} }
func (m *GetExperimentServiceRequest) String() string { return proto.CompactTextString(m) }
func (*GetExperimentServiceRequest) ProtoMessage()    {}
func (*GetExperimentServiceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_45927d3315488c55, []int{2}
}

func (m *GetExperimentServiceRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetExperimentServiceRequest.Unmarshal(m, b)
}
func (m *GetExperimentServiceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetExperimentServiceRequest.Marshal(b, m, deterministic)
}
func (m *GetExperimentServiceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetExperimentServiceRequest.Merge(m, src)
}
func (m *GetExperimentServiceRequest) XXX_Size() int {
	return xxx_messageInfo_GetExperimentServiceRequest.Size(m)
}
func (m *GetExperimentServiceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetExperimentServiceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetExperimentServiceRequest proto.InternalMessageInfo

func (m *GetExperimentServiceRequest) GetExp() string {
	if m != nil {
		return m.Exp
	}
	return ""
}

type ListExperimentServiceRequest struct {
	//Partial representation, fields=id,name
	Fields string `protobuf:"bytes,1,opt,name=fields,proto3" json:"fields,omitempty"`
	//*
	// Sort fields, comma separated list for the ordering
	// use **?filter=-display_name** with a dash to sort descending
	// use **?filter=display_name** to sort ascending
	OrderBy string `protobuf:"bytes,2,opt,name=order_by,json=orderBy,proto3" json:"order_by,omitempty"`
	//Filter
	Filter string `protobuf:"bytes,3,opt,name=filter,proto3" json:"filter,omitempty"`
	//Page number for paginated content. Tipp: follow the HATEOAS next, prev,...
	Page int32 `protobuf:"varint,4,opt,name=page,proto3" json:"page,omitempty"`
	//Number of elements to return per page
	Limit int32 `protobuf:"varint,5,opt,name=limit,proto3" json:"limit,omitempty"`
	//https://cloud.google.com/apis/design/design_patterns#resource_view
	View string `protobuf:"bytes,8,opt,name=view,proto3" json:"view,omitempty"`
	//Query term to search a experiment
	Q                    string   `protobuf:"bytes,11,opt,name=q,proto3" json:"q,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ListExperimentServiceRequest) Reset()         { *m = ListExperimentServiceRequest{} }
func (m *ListExperimentServiceRequest) String() string { return proto.CompactTextString(m) }
func (*ListExperimentServiceRequest) ProtoMessage()    {}
func (*ListExperimentServiceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_45927d3315488c55, []int{3}
}

func (m *ListExperimentServiceRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListExperimentServiceRequest.Unmarshal(m, b)
}
func (m *ListExperimentServiceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListExperimentServiceRequest.Marshal(b, m, deterministic)
}
func (m *ListExperimentServiceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListExperimentServiceRequest.Merge(m, src)
}
func (m *ListExperimentServiceRequest) XXX_Size() int {
	return xxx_messageInfo_ListExperimentServiceRequest.Size(m)
}
func (m *ListExperimentServiceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ListExperimentServiceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ListExperimentServiceRequest proto.InternalMessageInfo

func (m *ListExperimentServiceRequest) GetFields() string {
	if m != nil {
		return m.Fields
	}
	return ""
}

func (m *ListExperimentServiceRequest) GetOrderBy() string {
	if m != nil {
		return m.OrderBy
	}
	return ""
}

func (m *ListExperimentServiceRequest) GetFilter() string {
	if m != nil {
		return m.Filter
	}
	return ""
}

func (m *ListExperimentServiceRequest) GetPage() int32 {
	if m != nil {
		return m.Page
	}
	return 0
}

func (m *ListExperimentServiceRequest) GetLimit() int32 {
	if m != nil {
		return m.Limit
	}
	return 0
}

func (m *ListExperimentServiceRequest) GetView() string {
	if m != nil {
		return m.View
	}
	return ""
}

func (m *ListExperimentServiceRequest) GetQ() string {
	if m != nil {
		return m.Q
	}
	return ""
}

type ReleaseExperimentServiceRequest struct {
	Data                 *experiment.ExperimentEntity `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                     `json:"-"`
	XXX_unrecognized     []byte                       `json:"-"`
	XXX_sizecache        int32                        `json:"-"`
}

func (m *ReleaseExperimentServiceRequest) Reset()         { *m = ReleaseExperimentServiceRequest{} }
func (m *ReleaseExperimentServiceRequest) String() string { return proto.CompactTextString(m) }
func (*ReleaseExperimentServiceRequest) ProtoMessage()    {}
func (*ReleaseExperimentServiceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_45927d3315488c55, []int{4}
}

func (m *ReleaseExperimentServiceRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ReleaseExperimentServiceRequest.Unmarshal(m, b)
}
func (m *ReleaseExperimentServiceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ReleaseExperimentServiceRequest.Marshal(b, m, deterministic)
}
func (m *ReleaseExperimentServiceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ReleaseExperimentServiceRequest.Merge(m, src)
}
func (m *ReleaseExperimentServiceRequest) XXX_Size() int {
	return xxx_messageInfo_ReleaseExperimentServiceRequest.Size(m)
}
func (m *ReleaseExperimentServiceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ReleaseExperimentServiceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ReleaseExperimentServiceRequest proto.InternalMessageInfo

func (m *ReleaseExperimentServiceRequest) GetData() *experiment.ExperimentEntity {
	if m != nil {
		return m.Data
	}
	return nil
}

type UpdateExperimentServiceRequest struct {
	Exp                  string                 `protobuf:"bytes,1,opt,name=exp,proto3" json:"exp,omitempty"`
	Data                 *experiment.Experiment `protobuf:"bytes,2,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{}               `json:"-"`
	XXX_unrecognized     []byte                 `json:"-"`
	XXX_sizecache        int32                  `json:"-"`
}

func (m *UpdateExperimentServiceRequest) Reset()         { *m = UpdateExperimentServiceRequest{} }
func (m *UpdateExperimentServiceRequest) String() string { return proto.CompactTextString(m) }
func (*UpdateExperimentServiceRequest) ProtoMessage()    {}
func (*UpdateExperimentServiceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_45927d3315488c55, []int{5}
}

func (m *UpdateExperimentServiceRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UpdateExperimentServiceRequest.Unmarshal(m, b)
}
func (m *UpdateExperimentServiceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UpdateExperimentServiceRequest.Marshal(b, m, deterministic)
}
func (m *UpdateExperimentServiceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UpdateExperimentServiceRequest.Merge(m, src)
}
func (m *UpdateExperimentServiceRequest) XXX_Size() int {
	return xxx_messageInfo_UpdateExperimentServiceRequest.Size(m)
}
func (m *UpdateExperimentServiceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_UpdateExperimentServiceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_UpdateExperimentServiceRequest proto.InternalMessageInfo

func (m *UpdateExperimentServiceRequest) GetExp() string {
	if m != nil {
		return m.Exp
	}
	return ""
}

func (m *UpdateExperimentServiceRequest) GetData() *experiment.Experiment {
	if m != nil {
		return m.Data
	}
	return nil
}

func init() {
	proto.RegisterType((*CreateExperimentServiceRequest)(nil), "experimentservice.CreateExperimentServiceRequest")
	proto.RegisterType((*DeleteExperimentServiceRequest)(nil), "experimentservice.DeleteExperimentServiceRequest")
	proto.RegisterType((*GetExperimentServiceRequest)(nil), "experimentservice.GetExperimentServiceRequest")
	proto.RegisterType((*ListExperimentServiceRequest)(nil), "experimentservice.ListExperimentServiceRequest")
	proto.RegisterType((*ReleaseExperimentServiceRequest)(nil), "experimentservice.ReleaseExperimentServiceRequest")
	proto.RegisterType((*UpdateExperimentServiceRequest)(nil), "experimentservice.UpdateExperimentServiceRequest")
}

func init() { proto.RegisterFile("experimentservice/service.proto", fileDescriptor_45927d3315488c55) }

var fileDescriptor_45927d3315488c55 = []byte{
	// 544 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xa4, 0x94, 0xc1, 0x6e, 0xd3, 0x4c,
	0x14, 0x85, 0x35, 0x6d, 0x92, 0xbf, 0xbd, 0xfd, 0x11, 0xc9, 0x08, 0x8a, 0x71, 0xd2, 0x24, 0x72,
	0x11, 0x94, 0x0a, 0x3c, 0x34, 0xec, 0xba, 0xa4, 0x44, 0x6c, 0xba, 0x72, 0xc5, 0xb6, 0xc8, 0x49,
	0x6e, 0xa3, 0x01, 0xc7, 0xe3, 0xd8, 0xd3, 0x92, 0x08, 0xb1, 0x29, 0x1b, 0x24, 0xa4, 0x6e, 0x78,
	0x16, 0x9e, 0x84, 0x15, 0x7b, 0x1e, 0x04, 0x79, 0xec, 0x24, 0x4d, 0x32, 0x99, 0x20, 0xb1, 0xca,
	0x5c, 0x7b, 0xce, 0xc9, 0x37, 0x73, 0xcf, 0x35, 0x34, 0x70, 0x14, 0x61, 0xcc, 0x07, 0x18, 0xca,
	0x04, 0xe3, 0x2b, 0xde, 0x45, 0x96, 0xff, 0xba, 0x51, 0x2c, 0xa4, 0xa0, 0x95, 0xa5, 0x0d, 0x76,
	0xad, 0x2f, 0x44, 0x3f, 0x40, 0xe6, 0x47, 0x9c, 0xf9, 0x61, 0x28, 0xa4, 0x2f, 0xb9, 0x08, 0x93,
	0x4c, 0x60, 0x57, 0x67, 0x02, 0x36, 0x5b, 0x4e, 0x5e, 0xe6, 0x52, 0x55, 0x75, 0x2e, 0x2f, 0x18,
	0x0e, 0x22, 0x39, 0xce, 0x5e, 0x3a, 0xa7, 0x50, 0x3f, 0x89, 0xd1, 0x97, 0xd8, 0x9e, 0xca, 0xce,
	0xb2, 0xbf, 0xf4, 0x70, 0x78, 0x89, 0x89, 0xa4, 0x87, 0x50, 0xe8, 0xf9, 0xd2, 0xb7, 0x48, 0x93,
	0x1c, 0xec, 0xb4, 0x76, 0xdd, 0x5b, 0xfe, 0x33, 0x8d, 0xa7, 0xf6, 0x38, 0xe7, 0x50, 0x7f, 0x8d,
	0x01, 0x1a, 0xdc, 0xca, 0xb0, 0x89, 0xa3, 0x48, 0x99, 0x6d, 0x7b, 0xe9, 0x72, 0xea, 0xbf, 0x91,
	0xfb, 0x67, 0xb4, 0xee, 0x84, 0xd6, 0x6d, 0xa7, 0xb4, 0xb9, 0x3f, 0x83, 0xea, 0x1b, 0x94, 0x7f,
	0x6f, 0xee, 0xfc, 0x20, 0x50, 0x3b, 0xe5, 0xc9, 0x6a, 0xc9, 0x2e, 0x94, 0x2e, 0x38, 0x06, 0xbd,
	0x24, 0x57, 0xe5, 0x15, 0x7d, 0x08, 0x5b, 0x22, 0xee, 0x61, 0xfc, 0xae, 0x33, 0x56, 0x64, 0xdb,
	0xde, 0x7f, 0xaa, 0x7e, 0x35, 0xce, 0x24, 0x81, 0xc4, 0xd8, 0xda, 0x9c, 0x48, 0xd2, 0x8a, 0x52,
	0x28, 0x44, 0x7e, 0x1f, 0xad, 0x42, 0x93, 0x1c, 0x14, 0x3d, 0xb5, 0xa6, 0xf7, 0xa0, 0x18, 0xf0,
	0x01, 0x97, 0x56, 0x51, 0x3d, 0xcc, 0x8a, 0x74, 0xe7, 0x15, 0xc7, 0x8f, 0xd6, 0x96, 0xd2, 0xab,
	0x35, 0xfd, 0x1f, 0xc8, 0xd0, 0xda, 0x51, 0x0f, 0xc8, 0xd0, 0x39, 0x83, 0x86, 0x87, 0x01, 0xfa,
	0xc9, 0xea, 0x9b, 0x7c, 0x31, 0xd7, 0x97, 0x9a, 0xbe, 0x2f, 0xed, 0x50, 0xf2, 0xe9, 0xed, 0x9d,
	0x43, 0xfd, 0x6d, 0xd4, 0xf3, 0xff, 0xa9, 0x3b, 0x86, 0xee, 0xb7, 0x7e, 0x95, 0xa0, 0xb2, 0x64,
	0x4d, 0xbf, 0x12, 0x28, 0x2f, 0x46, 0x8c, 0x1e, 0xb9, 0x4b, 0x11, 0x77, 0xcd, 0x39, 0xb4, 0x8d,
	0x27, 0x74, 0xf6, 0xaf, 0x7f, 0xfe, 0xfe, 0xbe, 0xb1, 0xe7, 0xdc, 0x67, 0x03, 0xd1, 0xfd, 0x90,
	0xe2, 0xdc, 0x1a, 0x84, 0xe4, 0x58, 0x01, 0xd2, 0x6b, 0x02, 0xe5, 0xc5, 0x7c, 0x6a, 0x51, 0xcc,
	0x21, 0xb6, 0x57, 0x84, 0x74, 0x02, 0x71, 0x58, 0xd5, 0x42, 0xb0, 0x4f, 0x38, 0x8a, 0x3e, 0xd3,
	0x6f, 0x04, 0xee, 0xcc, 0x85, 0x98, 0xba, 0x1a, 0x02, 0x43, 0xcc, 0xd7, 0xdc, 0xc4, 0x33, 0x05,
	0xf1, 0x98, 0x3e, 0x32, 0x40, 0xb0, 0x3e, 0x4a, 0xf7, 0x7d, 0x22, 0x42, 0xfa, 0x85, 0xc0, 0xdd,
	0xf9, 0x01, 0x49, 0x28, 0xd3, 0xf0, 0x98, 0x86, 0xc8, 0x6e, 0xea, 0x81, 0x4e, 0x44, 0x10, 0x60,
	0x37, 0xfd, 0x4e, 0x39, 0x7b, 0x0a, 0xea, 0x01, 0xd5, 0xb7, 0x87, 0xde, 0x10, 0xa8, 0x2c, 0xe5,
	0x9d, 0xb6, 0x34, 0x1c, 0x6b, 0xa6, 0x62, 0x65, 0x6b, 0x9e, 0x2b, 0x80, 0x27, 0x4e, 0x43, 0x7f,
	0x2b, 0x47, 0xc7, 0x71, 0x66, 0x9c, 0x27, 0xe5, 0x86, 0x40, 0x79, 0x71, 0x56, 0xb4, 0x49, 0x31,
	0x0f, 0xd4, 0x9a, 0x56, 0x3d, 0x55, 0x50, 0xfb, 0x2d, 0x53, 0x5e, 0x32, 0xa0, 0x4e, 0x49, 0x9d,
	0xe7, 0xe5, 0x9f, 0x00, 0x00, 0x00, 0xff, 0xff, 0xa2, 0x59, 0x10, 0x7e, 0x3c, 0x06, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// ExperimentServiceClient is the client API for ExperimentService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type ExperimentServiceClient interface {
	// Creates a new Experiment
	CreateExperiment(ctx context.Context, in *CreateExperimentServiceRequest, opts ...grpc.CallOption) (*experiment.ExperimentEntity, error)
	// Delete a Experiment
	DeleteExperiment(ctx context.Context, in *DeleteExperimentServiceRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	// The Get method takes zero or more parameters, and returns a ExperimentEntity which contains a Experiment
	GetExperiment(ctx context.Context, in *GetExperimentServiceRequest, opts ...grpc.CallOption) (*experiment.ExperimentEntity, error)
	// The List method takes zero or more parameters as input, and returns a ExperimentCollection of ExperimentEntity that match the input parameters.
	ListExperiments(ctx context.Context, in *ListExperimentServiceRequest, opts ...grpc.CallOption) (*experiment.ExperimentCollection, error)
	// Releases experiment
	ReleaseExperiment(ctx context.Context, in *ReleaseExperimentServiceRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	// Updates a Experiment, partial updates are supported
	UpdateExperiment(ctx context.Context, in *UpdateExperimentServiceRequest, opts ...grpc.CallOption) (*experiment.ExperimentEntity, error)
}

type experimentServiceClient struct {
	cc *grpc.ClientConn
}

func NewExperimentServiceClient(cc *grpc.ClientConn) ExperimentServiceClient {
	return &experimentServiceClient{cc}
}

func (c *experimentServiceClient) CreateExperiment(ctx context.Context, in *CreateExperimentServiceRequest, opts ...grpc.CallOption) (*experiment.ExperimentEntity, error) {
	out := new(experiment.ExperimentEntity)
	err := c.cc.Invoke(ctx, "/experimentservice.ExperimentService/CreateExperiment", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *experimentServiceClient) DeleteExperiment(ctx context.Context, in *DeleteExperimentServiceRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/experimentservice.ExperimentService/DeleteExperiment", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *experimentServiceClient) GetExperiment(ctx context.Context, in *GetExperimentServiceRequest, opts ...grpc.CallOption) (*experiment.ExperimentEntity, error) {
	out := new(experiment.ExperimentEntity)
	err := c.cc.Invoke(ctx, "/experimentservice.ExperimentService/GetExperiment", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *experimentServiceClient) ListExperiments(ctx context.Context, in *ListExperimentServiceRequest, opts ...grpc.CallOption) (*experiment.ExperimentCollection, error) {
	out := new(experiment.ExperimentCollection)
	err := c.cc.Invoke(ctx, "/experimentservice.ExperimentService/ListExperiments", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *experimentServiceClient) ReleaseExperiment(ctx context.Context, in *ReleaseExperimentServiceRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/experimentservice.ExperimentService/ReleaseExperiment", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *experimentServiceClient) UpdateExperiment(ctx context.Context, in *UpdateExperimentServiceRequest, opts ...grpc.CallOption) (*experiment.ExperimentEntity, error) {
	out := new(experiment.ExperimentEntity)
	err := c.cc.Invoke(ctx, "/experimentservice.ExperimentService/UpdateExperiment", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ExperimentServiceServer is the server API for ExperimentService service.
type ExperimentServiceServer interface {
	// Creates a new Experiment
	CreateExperiment(context.Context, *CreateExperimentServiceRequest) (*experiment.ExperimentEntity, error)
	// Delete a Experiment
	DeleteExperiment(context.Context, *DeleteExperimentServiceRequest) (*empty.Empty, error)
	// The Get method takes zero or more parameters, and returns a ExperimentEntity which contains a Experiment
	GetExperiment(context.Context, *GetExperimentServiceRequest) (*experiment.ExperimentEntity, error)
	// The List method takes zero or more parameters as input, and returns a ExperimentCollection of ExperimentEntity that match the input parameters.
	ListExperiments(context.Context, *ListExperimentServiceRequest) (*experiment.ExperimentCollection, error)
	// Releases experiment
	ReleaseExperiment(context.Context, *ReleaseExperimentServiceRequest) (*empty.Empty, error)
	// Updates a Experiment, partial updates are supported
	UpdateExperiment(context.Context, *UpdateExperimentServiceRequest) (*experiment.ExperimentEntity, error)
}

// UnimplementedExperimentServiceServer can be embedded to have forward compatible implementations.
type UnimplementedExperimentServiceServer struct {
}

func (*UnimplementedExperimentServiceServer) CreateExperiment(ctx context.Context, req *CreateExperimentServiceRequest) (*experiment.ExperimentEntity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateExperiment not implemented")
}
func (*UnimplementedExperimentServiceServer) DeleteExperiment(ctx context.Context, req *DeleteExperimentServiceRequest) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteExperiment not implemented")
}
func (*UnimplementedExperimentServiceServer) GetExperiment(ctx context.Context, req *GetExperimentServiceRequest) (*experiment.ExperimentEntity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetExperiment not implemented")
}
func (*UnimplementedExperimentServiceServer) ListExperiments(ctx context.Context, req *ListExperimentServiceRequest) (*experiment.ExperimentCollection, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListExperiments not implemented")
}
func (*UnimplementedExperimentServiceServer) ReleaseExperiment(ctx context.Context, req *ReleaseExperimentServiceRequest) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ReleaseExperiment not implemented")
}
func (*UnimplementedExperimentServiceServer) UpdateExperiment(ctx context.Context, req *UpdateExperimentServiceRequest) (*experiment.ExperimentEntity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateExperiment not implemented")
}

func RegisterExperimentServiceServer(s *grpc.Server, srv ExperimentServiceServer) {
	s.RegisterService(&_ExperimentService_serviceDesc, srv)
}

func _ExperimentService_CreateExperiment_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateExperimentServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ExperimentServiceServer).CreateExperiment(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/experimentservice.ExperimentService/CreateExperiment",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ExperimentServiceServer).CreateExperiment(ctx, req.(*CreateExperimentServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ExperimentService_DeleteExperiment_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteExperimentServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ExperimentServiceServer).DeleteExperiment(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/experimentservice.ExperimentService/DeleteExperiment",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ExperimentServiceServer).DeleteExperiment(ctx, req.(*DeleteExperimentServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ExperimentService_GetExperiment_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetExperimentServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ExperimentServiceServer).GetExperiment(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/experimentservice.ExperimentService/GetExperiment",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ExperimentServiceServer).GetExperiment(ctx, req.(*GetExperimentServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ExperimentService_ListExperiments_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListExperimentServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ExperimentServiceServer).ListExperiments(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/experimentservice.ExperimentService/ListExperiments",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ExperimentServiceServer).ListExperiments(ctx, req.(*ListExperimentServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ExperimentService_ReleaseExperiment_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReleaseExperimentServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ExperimentServiceServer).ReleaseExperiment(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/experimentservice.ExperimentService/ReleaseExperiment",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ExperimentServiceServer).ReleaseExperiment(ctx, req.(*ReleaseExperimentServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ExperimentService_UpdateExperiment_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateExperimentServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ExperimentServiceServer).UpdateExperiment(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/experimentservice.ExperimentService/UpdateExperiment",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ExperimentServiceServer).UpdateExperiment(ctx, req.(*UpdateExperimentServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _ExperimentService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "experimentservice.ExperimentService",
	HandlerType: (*ExperimentServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateExperiment",
			Handler:    _ExperimentService_CreateExperiment_Handler,
		},
		{
			MethodName: "DeleteExperiment",
			Handler:    _ExperimentService_DeleteExperiment_Handler,
		},
		{
			MethodName: "GetExperiment",
			Handler:    _ExperimentService_GetExperiment_Handler,
		},
		{
			MethodName: "ListExperiments",
			Handler:    _ExperimentService_ListExperiments_Handler,
		},
		{
			MethodName: "ReleaseExperiment",
			Handler:    _ExperimentService_ReleaseExperiment_Handler,
		},
		{
			MethodName: "UpdateExperiment",
			Handler:    _ExperimentService_UpdateExperiment_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "experimentservice/service.proto",
}
