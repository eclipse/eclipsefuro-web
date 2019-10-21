// Code generated by protoc-gen-go. DO NOT EDIT.
// source: project/project.proto

package project

import (
	furo "../furo"
	_type "../google/type"
	person "../person"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
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

// ProjectCollection with repeated ProjectEntity
type ProjectCollection struct {
	// Contains a project.ProjectEntity repeated
	Entities []*ProjectEntity `protobuf:"bytes,4,rep,name=entities,proto3" json:"entities,omitempty"`
	// Hateoas links
	Links []*furo.Link `protobuf:"bytes,3,rep,name=links,proto3" json:"links,omitempty"`
	// Meta for the response
	Meta                 *furo.Meta `protobuf:"bytes,2,opt,name=meta,proto3" json:"meta,omitempty"`
	XXX_NoUnkeyedLiteral struct{}   `json:"-"`
	XXX_unrecognized     []byte     `json:"-"`
	XXX_sizecache        int32      `json:"-"`
}

func (m *ProjectCollection) Reset()         { *m = ProjectCollection{} }
func (m *ProjectCollection) String() string { return proto.CompactTextString(m) }
func (*ProjectCollection) ProtoMessage()    {}
func (*ProjectCollection) Descriptor() ([]byte, []int) {
	return fileDescriptor_2cf0ca921a221351, []int{0}
}

func (m *ProjectCollection) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ProjectCollection.Unmarshal(m, b)
}
func (m *ProjectCollection) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ProjectCollection.Marshal(b, m, deterministic)
}
func (m *ProjectCollection) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ProjectCollection.Merge(m, src)
}
func (m *ProjectCollection) XXX_Size() int {
	return xxx_messageInfo_ProjectCollection.Size(m)
}
func (m *ProjectCollection) XXX_DiscardUnknown() {
	xxx_messageInfo_ProjectCollection.DiscardUnknown(m)
}

var xxx_messageInfo_ProjectCollection proto.InternalMessageInfo

func (m *ProjectCollection) GetEntities() []*ProjectEntity {
	if m != nil {
		return m.Entities
	}
	return nil
}

func (m *ProjectCollection) GetLinks() []*furo.Link {
	if m != nil {
		return m.Links
	}
	return nil
}

func (m *ProjectCollection) GetMeta() *furo.Meta {
	if m != nil {
		return m.Meta
	}
	return nil
}

// ProjectEntity with Project
type ProjectEntity struct {
	// contains a project.Project
	Data *Project `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
	// Hateoas links
	Links []*furo.Link `protobuf:"bytes,2,rep,name=links,proto3" json:"links,omitempty"`
	// Meta for the response
	Meta                 *furo.Meta `protobuf:"bytes,3,opt,name=meta,proto3" json:"meta,omitempty"`
	XXX_NoUnkeyedLiteral struct{}   `json:"-"`
	XXX_unrecognized     []byte     `json:"-"`
	XXX_sizecache        int32      `json:"-"`
}

func (m *ProjectEntity) Reset()         { *m = ProjectEntity{} }
func (m *ProjectEntity) String() string { return proto.CompactTextString(m) }
func (*ProjectEntity) ProtoMessage()    {}
func (*ProjectEntity) Descriptor() ([]byte, []int) {
	return fileDescriptor_2cf0ca921a221351, []int{1}
}

func (m *ProjectEntity) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ProjectEntity.Unmarshal(m, b)
}
func (m *ProjectEntity) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ProjectEntity.Marshal(b, m, deterministic)
}
func (m *ProjectEntity) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ProjectEntity.Merge(m, src)
}
func (m *ProjectEntity) XXX_Size() int {
	return xxx_messageInfo_ProjectEntity.Size(m)
}
func (m *ProjectEntity) XXX_DiscardUnknown() {
	xxx_messageInfo_ProjectEntity.DiscardUnknown(m)
}

var xxx_messageInfo_ProjectEntity proto.InternalMessageInfo

func (m *ProjectEntity) GetData() *Project {
	if m != nil {
		return m.Data
	}
	return nil
}

func (m *ProjectEntity) GetLinks() []*furo.Link {
	if m != nil {
		return m.Links
	}
	return nil
}

func (m *ProjectEntity) GetMeta() *furo.Meta {
	if m != nil {
		return m.Meta
	}
	return nil
}

// Project description
type Project struct {
	// Project cost limit
	CostLimit *_type.Money `protobuf:"bytes,7,opt,name=cost_limit,json=costLimit,proto3" json:"cost_limit,omitempty"`
	// Short project description
	Description string `protobuf:"bytes,5,opt,name=description,proto3" json:"description,omitempty"`
	// Localized String representation of a project
	DisplayName string `protobuf:"bytes,2,opt,name=display_name,json=displayName,proto3" json:"display_name,omitempty"`
	// Prospective end date of the project
	End *_type.Date `protobuf:"bytes,4,opt,name=end,proto3" json:"end,omitempty"`
	// Identity of a project
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// List of project members
	Members []*person.Person `protobuf:"bytes,6,rep,name=members,proto3" json:"members,omitempty"`
	// Start date of the project
	Start                *_type.Date `protobuf:"bytes,3,opt,name=start,proto3" json:"start,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-"`
	XXX_unrecognized     []byte      `json:"-"`
	XXX_sizecache        int32       `json:"-"`
}

func (m *Project) Reset()         { *m = Project{} }
func (m *Project) String() string { return proto.CompactTextString(m) }
func (*Project) ProtoMessage()    {}
func (*Project) Descriptor() ([]byte, []int) {
	return fileDescriptor_2cf0ca921a221351, []int{2}
}

func (m *Project) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Project.Unmarshal(m, b)
}
func (m *Project) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Project.Marshal(b, m, deterministic)
}
func (m *Project) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Project.Merge(m, src)
}
func (m *Project) XXX_Size() int {
	return xxx_messageInfo_Project.Size(m)
}
func (m *Project) XXX_DiscardUnknown() {
	xxx_messageInfo_Project.DiscardUnknown(m)
}

var xxx_messageInfo_Project proto.InternalMessageInfo

func (m *Project) GetCostLimit() *_type.Money {
	if m != nil {
		return m.CostLimit
	}
	return nil
}

func (m *Project) GetDescription() string {
	if m != nil {
		return m.Description
	}
	return ""
}

func (m *Project) GetDisplayName() string {
	if m != nil {
		return m.DisplayName
	}
	return ""
}

func (m *Project) GetEnd() *_type.Date {
	if m != nil {
		return m.End
	}
	return nil
}

func (m *Project) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *Project) GetMembers() []*person.Person {
	if m != nil {
		return m.Members
	}
	return nil
}

func (m *Project) GetStart() *_type.Date {
	if m != nil {
		return m.Start
	}
	return nil
}

func init() {
	proto.RegisterType((*ProjectCollection)(nil), "project.ProjectCollection")
	proto.RegisterType((*ProjectEntity)(nil), "project.ProjectEntity")
	proto.RegisterType((*Project)(nil), "project.Project")
}

func init() { proto.RegisterFile("project/project.proto", fileDescriptor_2cf0ca921a221351) }

var fileDescriptor_2cf0ca921a221351 = []byte{
	// 369 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x52, 0x5b, 0xae, 0xd3, 0x30,
	0x14, 0x54, 0x1e, 0xbd, 0xa1, 0xe7, 0xc2, 0x85, 0x1a, 0x51, 0x2c, 0x3e, 0x50, 0x28, 0x48, 0xf4,
	0xcb, 0x11, 0x65, 0x09, 0xc0, 0x5f, 0x8b, 0x2a, 0x6f, 0xa0, 0x72, 0x93, 0x43, 0x65, 0x9a, 0xd8,
	0x51, 0x6c, 0x84, 0xb2, 0x84, 0xee, 0x1a, 0xf9, 0x51, 0xda, 0x22, 0x10, 0x5f, 0x47, 0x99, 0x99,
	0xe3, 0x19, 0x4f, 0x0c, 0x2f, 0xfa, 0x41, 0x7f, 0xc7, 0xda, 0x56, 0x71, 0xb2, 0x7e, 0xd0, 0x56,
	0x93, 0x22, 0x7e, 0xbe, 0x7a, 0xfa, 0xed, 0xc7, 0xa0, 0xab, 0x0e, 0xad, 0x08, 0x4c, 0x04, 0x5a,
	0xa9, 0x8e, 0x11, 0x78, 0x79, 0xd0, 0xfa, 0xd0, 0x62, 0x65, 0xc7, 0x1e, 0xab, 0x4e, 0x2b, 0x1c,
	0x23, 0x31, 0xbf, 0x26, 0x1a, 0x61, 0x31, 0xe2, 0xcf, 0x7b, 0x1c, 0x8c, 0x56, 0x55, 0x18, 0x01,
	0x5c, 0x9c, 0x12, 0x98, 0x6d, 0x83, 0xe7, 0x27, 0xdd, 0xb6, 0x58, 0x5b, 0xa9, 0x15, 0x59, 0xc1,
	0x23, 0x54, 0x56, 0x5a, 0x89, 0x86, 0xe6, 0x65, 0xb6, 0xbc, 0x5f, 0xcd, 0xd9, 0x39, 0x68, 0x54,
	0x7f, 0x71, 0xfc, 0xc8, 0x7f, 0xeb, 0x48, 0x09, 0x13, 0x97, 0xce, 0xd0, 0xcc, 0x2f, 0x00, 0x73,
	0x81, 0xd9, 0x5a, 0xaa, 0x23, 0x0f, 0x04, 0x79, 0x0d, 0xb9, 0xbb, 0x10, 0x4d, 0xcb, 0xe4, 0x22,
	0xd8, 0xa0, 0x15, 0xdc, 0xe3, 0x8b, 0x9f, 0xf0, 0xe4, 0xe6, 0x70, 0xf2, 0x0e, 0xf2, 0x46, 0x58,
	0x41, 0x13, 0xbf, 0xf0, 0xec, 0xcf, 0x08, 0xdc, 0xb3, 0x17, 0xe3, 0xf4, 0x7f, 0xc6, 0xd9, 0x3f,
	0x8c, 0x4f, 0x29, 0x14, 0xf1, 0x4c, 0xf2, 0x01, 0xa0, 0xd6, 0xc6, 0xee, 0x5a, 0xd9, 0x49, 0x4b,
	0x0b, 0xbf, 0x41, 0x58, 0xa8, 0x94, 0xb9, 0x4a, 0xd9, 0xc6, 0x75, 0xcd, 0xa7, 0x4e, 0xb5, 0x76,
	0x22, 0x52, 0xc2, 0x7d, 0x83, 0xa6, 0x1e, 0x64, 0xef, 0xca, 0xa3, 0x93, 0x32, 0x59, 0x4e, 0xf9,
	0x35, 0x44, 0xde, 0xc0, 0xe3, 0x46, 0x9a, 0xbe, 0x15, 0xe3, 0x4e, 0x89, 0x0e, 0x7d, 0x03, 0x4e,
	0x12, 0xb0, 0xaf, 0xa2, 0x43, 0xf2, 0x16, 0x32, 0x54, 0x0d, 0xcd, 0xbd, 0xe1, 0xec, 0xc6, 0xf0,
	0xb3, 0xb0, 0xc8, 0x1d, 0x4b, 0x1e, 0x20, 0x95, 0x8d, 0xaf, 0x63, 0xca, 0x53, 0xd9, 0x90, 0x25,
	0x14, 0x1d, 0x76, 0x7b, 0x1c, 0x0c, 0xbd, 0xf3, 0x97, 0x7f, 0x60, 0xf1, 0xef, 0x6e, 0xfd, 0xe0,
	0x67, 0x9a, 0xbc, 0x87, 0x89, 0xb1, 0x62, 0xb0, 0xb1, 0x83, 0xbf, 0x18, 0x04, 0x7e, 0x7f, 0xe7,
	0xdf, 0xc5, 0xc7, 0x5f, 0x01, 0x00, 0x00, 0xff, 0xff, 0x95, 0x3c, 0xd5, 0xde, 0xa1, 0x02, 0x00,
	0x00,
}
