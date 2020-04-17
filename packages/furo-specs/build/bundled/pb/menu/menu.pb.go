// Code generated by furo-proto-gen. DO NOT EDIT.

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.21.0-devel
// 	protoc        v3.11.4
// source: menu/menu.proto

package menu

import (
	proto "github.com/golang/protobuf/proto"
	any "github.com/golang/protobuf/ptypes/any"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

// Item of a contextual menu
type Menuitem struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// String representation of the menu item action
	Action string `protobuf:"bytes,5,opt,name=action,proto3" json:"action,omitempty"`
	// Children of this item
	Children []*Menuitem `protobuf:"bytes,7,rep,name=children,proto3" json:"children,omitempty"`
	// Keyboard command hint
	Command string `protobuf:"bytes,4,opt,name=command,proto3" json:"command,omitempty"`
	// Display actions as disabled when they can only be used sometimes, under certain conditions. They should be displayed as disabled rather than removing them.
	Disabled bool `protobuf:"varint,3,opt,name=disabled,proto3" json:"disabled,omitempty"`
	// String representation of the menu item. Menu item text
	DisplayName string `protobuf:"bytes,2,opt,name=display_name,json=displayName,proto3" json:"display_name,omitempty"`
	// Attribute flags e.g. important, negative, positive
	Flags []string `protobuf:"bytes,8,rep,name=flags,proto3" json:"flags,omitempty"`
	// Leading icon of the menu
	Icon string `protobuf:"bytes,1,opt,name=icon,proto3" json:"icon,omitempty"`
	// Item has a leading divider line
	LeadingDivider bool `protobuf:"varint,6,opt,name=leading_divider,json=leadingDivider,proto3" json:"leading_divider,omitempty"`
	// Optional payload
	Payload []*any.Any `protobuf:"bytes,9,rep,name=payload,proto3" json:"payload,omitempty"`
}

func (x *Menuitem) Reset() {
	*x = Menuitem{}
	if protoimpl.UnsafeEnabled {
		mi := &file_menu_menu_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Menuitem) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Menuitem) ProtoMessage() {}

func (x *Menuitem) ProtoReflect() protoreflect.Message {
	mi := &file_menu_menu_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Menuitem.ProtoReflect.Descriptor instead.
func (*Menuitem) Descriptor() ([]byte, []int) {
	return file_menu_menu_proto_rawDescGZIP(), []int{0}
}

func (x *Menuitem) GetAction() string {
	if x != nil {
		return x.Action
	}
	return ""
}

func (x *Menuitem) GetChildren() []*Menuitem {
	if x != nil {
		return x.Children
	}
	return nil
}

func (x *Menuitem) GetCommand() string {
	if x != nil {
		return x.Command
	}
	return ""
}

func (x *Menuitem) GetDisabled() bool {
	if x != nil {
		return x.Disabled
	}
	return false
}

func (x *Menuitem) GetDisplayName() string {
	if x != nil {
		return x.DisplayName
	}
	return ""
}

func (x *Menuitem) GetFlags() []string {
	if x != nil {
		return x.Flags
	}
	return nil
}

func (x *Menuitem) GetIcon() string {
	if x != nil {
		return x.Icon
	}
	return ""
}

func (x *Menuitem) GetLeadingDivider() bool {
	if x != nil {
		return x.LeadingDivider
	}
	return false
}

func (x *Menuitem) GetPayload() []*any.Any {
	if x != nil {
		return x.Payload
	}
	return nil
}

var File_menu_menu_proto protoreflect.FileDescriptor

var file_menu_menu_proto_rawDesc = []byte{
	0x0a, 0x0f, 0x6d, 0x65, 0x6e, 0x75, 0x2f, 0x6d, 0x65, 0x6e, 0x75, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x04, 0x6d, 0x65, 0x6e, 0x75, 0x1a, 0x19, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x61, 0x6e, 0x79, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x22, 0xaa, 0x02, 0x0a, 0x08, 0x4d, 0x65, 0x6e, 0x75, 0x69, 0x74, 0x65, 0x6d, 0x12,
	0x16, 0x0a, 0x06, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x06, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x2a, 0x0a, 0x08, 0x63, 0x68, 0x69, 0x6c, 0x64,
	0x72, 0x65, 0x6e, 0x18, 0x07, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x6d, 0x65, 0x6e, 0x75,
	0x2e, 0x4d, 0x65, 0x6e, 0x75, 0x69, 0x74, 0x65, 0x6d, 0x52, 0x08, 0x63, 0x68, 0x69, 0x6c, 0x64,
	0x72, 0x65, 0x6e, 0x12, 0x18, 0x0a, 0x07, 0x63, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x63, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x12, 0x1a, 0x0a,
	0x08, 0x64, 0x69, 0x73, 0x61, 0x62, 0x6c, 0x65, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x08, 0x52,
	0x08, 0x64, 0x69, 0x73, 0x61, 0x62, 0x6c, 0x65, 0x64, 0x12, 0x21, 0x0a, 0x0c, 0x64, 0x69, 0x73,
	0x70, 0x6c, 0x61, 0x79, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0b, 0x64, 0x69, 0x73, 0x70, 0x6c, 0x61, 0x79, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05,
	0x66, 0x6c, 0x61, 0x67, 0x73, 0x18, 0x08, 0x20, 0x03, 0x28, 0x09, 0x52, 0x05, 0x66, 0x6c, 0x61,
	0x67, 0x73, 0x12, 0x12, 0x0a, 0x04, 0x69, 0x63, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x69, 0x63, 0x6f, 0x6e, 0x12, 0x27, 0x0a, 0x0f, 0x6c, 0x65, 0x61, 0x64, 0x69, 0x6e,
	0x67, 0x5f, 0x64, 0x69, 0x76, 0x69, 0x64, 0x65, 0x72, 0x18, 0x06, 0x20, 0x01, 0x28, 0x08, 0x52,
	0x0e, 0x6c, 0x65, 0x61, 0x64, 0x69, 0x6e, 0x67, 0x44, 0x69, 0x76, 0x69, 0x64, 0x65, 0x72, 0x12,
	0x2e, 0x0a, 0x07, 0x70, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x18, 0x09, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x14, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x41, 0x6e, 0x79, 0x52, 0x07, 0x70, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x42,
	0x18, 0x0a, 0x0d, 0x63, 0x6f, 0x6d, 0x2e, 0x61, 0x63, 0x6d, 0x65, 0x2e, 0x6d, 0x65, 0x6e, 0x75,
	0x42, 0x07, 0x4d, 0x65, 0x6e, 0x75, 0x41, 0x70, 0x69, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_menu_menu_proto_rawDescOnce sync.Once
	file_menu_menu_proto_rawDescData = file_menu_menu_proto_rawDesc
)

func file_menu_menu_proto_rawDescGZIP() []byte {
	file_menu_menu_proto_rawDescOnce.Do(func() {
		file_menu_menu_proto_rawDescData = protoimpl.X.CompressGZIP(file_menu_menu_proto_rawDescData)
	})
	return file_menu_menu_proto_rawDescData
}

var file_menu_menu_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_menu_menu_proto_goTypes = []interface{}{
	(*Menuitem)(nil), // 0: menu.Menuitem
	(*any.Any)(nil),  // 1: google.protobuf.Any
}
var file_menu_menu_proto_depIdxs = []int32{
	0, // 0: menu.Menuitem.children:type_name -> menu.Menuitem
	1, // 1: menu.Menuitem.payload:type_name -> google.protobuf.Any
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_menu_menu_proto_init() }
func file_menu_menu_proto_init() {
	if File_menu_menu_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_menu_menu_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Menuitem); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_menu_menu_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_menu_menu_proto_goTypes,
		DependencyIndexes: file_menu_menu_proto_depIdxs,
		MessageInfos:      file_menu_menu_proto_msgTypes,
	}.Build()
	File_menu_menu_proto = out.File
	file_menu_menu_proto_rawDesc = nil
	file_menu_menu_proto_goTypes = nil
	file_menu_menu_proto_depIdxs = nil
}
