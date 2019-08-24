// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: experiment_entity.proto

package experiment

import proto "github.com/gogo/protobuf/proto"
import fmt "fmt"
import math "math"
import furo "furo"

import io "io"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion2 // please upgrade the proto package

// ExperimentEntity with Experiment
type ExperimentEntity struct {
	// contains a experiment.Experiment
	Data *Experiment `protobuf:"bytes,1,opt,name=data" json:"data,omitempty"`
	// Hateoas links
	Links []*furo.Link `protobuf:"bytes,2,rep,name=links" json:"links,omitempty"`
	// Meta for the response
	Meta                 *furo.Meta `protobuf:"bytes,3,opt,name=meta" json:"meta,omitempty"`
	XXX_NoUnkeyedLiteral struct{}   `json:"-"`
	XXX_unrecognized     []byte     `json:"-"`
	XXX_sizecache        int32      `json:"-"`
}

func (m *ExperimentEntity) Reset()         { *m = ExperimentEntity{} }
func (m *ExperimentEntity) String() string { return proto.CompactTextString(m) }
func (*ExperimentEntity) ProtoMessage()    {}
func (*ExperimentEntity) Descriptor() ([]byte, []int) {
	return fileDescriptor_experiment_entity_d03a197f9364100c, []int{0}
}
func (m *ExperimentEntity) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ExperimentEntity) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ExperimentEntity.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalTo(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (dst *ExperimentEntity) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ExperimentEntity.Merge(dst, src)
}
func (m *ExperimentEntity) XXX_Size() int {
	return m.Size()
}
func (m *ExperimentEntity) XXX_DiscardUnknown() {
	xxx_messageInfo_ExperimentEntity.DiscardUnknown(m)
}

var xxx_messageInfo_ExperimentEntity proto.InternalMessageInfo

func (m *ExperimentEntity) GetData() *Experiment {
	if m != nil {
		return m.Data
	}
	return nil
}

func (m *ExperimentEntity) GetLinks() []*furo.Link {
	if m != nil {
		return m.Links
	}
	return nil
}

func (m *ExperimentEntity) GetMeta() *furo.Meta {
	if m != nil {
		return m.Meta
	}
	return nil
}

func init() {
	proto.RegisterType((*ExperimentEntity)(nil), "experiment.ExperimentEntity")
}
func (m *ExperimentEntity) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalTo(dAtA)
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ExperimentEntity) MarshalTo(dAtA []byte) (int, error) {
	var i int
	_ = i
	var l int
	_ = l
	if m.Data != nil {
		dAtA[i] = 0xa
		i++
		i = encodeVarintExperimentEntity(dAtA, i, uint64(m.Data.Size()))
		n1, err := m.Data.MarshalTo(dAtA[i:])
		if err != nil {
			return 0, err
		}
		i += n1
	}
	if len(m.Links) > 0 {
		for _, msg := range m.Links {
			dAtA[i] = 0x12
			i++
			i = encodeVarintExperimentEntity(dAtA, i, uint64(msg.Size()))
			n, err := msg.MarshalTo(dAtA[i:])
			if err != nil {
				return 0, err
			}
			i += n
		}
	}
	if m.Meta != nil {
		dAtA[i] = 0x1a
		i++
		i = encodeVarintExperimentEntity(dAtA, i, uint64(m.Meta.Size()))
		n2, err := m.Meta.MarshalTo(dAtA[i:])
		if err != nil {
			return 0, err
		}
		i += n2
	}
	if m.XXX_unrecognized != nil {
		i += copy(dAtA[i:], m.XXX_unrecognized)
	}
	return i, nil
}

func encodeVarintExperimentEntity(dAtA []byte, offset int, v uint64) int {
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return offset + 1
}
func (m *ExperimentEntity) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Data != nil {
		l = m.Data.Size()
		n += 1 + l + sovExperimentEntity(uint64(l))
	}
	if len(m.Links) > 0 {
		for _, e := range m.Links {
			l = e.Size()
			n += 1 + l + sovExperimentEntity(uint64(l))
		}
	}
	if m.Meta != nil {
		l = m.Meta.Size()
		n += 1 + l + sovExperimentEntity(uint64(l))
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func sovExperimentEntity(x uint64) (n int) {
	for {
		n++
		x >>= 7
		if x == 0 {
			break
		}
	}
	return n
}
func sozExperimentEntity(x uint64) (n int) {
	return sovExperimentEntity(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *ExperimentEntity) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowExperimentEntity
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: ExperimentEntity: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ExperimentEntity: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Data", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowExperimentEntity
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthExperimentEntity
			}
			postIndex := iNdEx + msglen
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Data == nil {
				m.Data = &Experiment{}
			}
			if err := m.Data.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Links", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowExperimentEntity
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthExperimentEntity
			}
			postIndex := iNdEx + msglen
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Links = append(m.Links, &furo.Link{})
			if err := m.Links[len(m.Links)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Meta", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowExperimentEntity
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthExperimentEntity
			}
			postIndex := iNdEx + msglen
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Meta == nil {
				m.Meta = &furo.Meta{}
			}
			if err := m.Meta.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipExperimentEntity(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthExperimentEntity
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			m.XXX_unrecognized = append(m.XXX_unrecognized, dAtA[iNdEx:iNdEx+skippy]...)
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipExperimentEntity(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowExperimentEntity
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowExperimentEntity
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
			return iNdEx, nil
		case 1:
			iNdEx += 8
			return iNdEx, nil
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowExperimentEntity
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			iNdEx += length
			if length < 0 {
				return 0, ErrInvalidLengthExperimentEntity
			}
			return iNdEx, nil
		case 3:
			for {
				var innerWire uint64
				var start int = iNdEx
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return 0, ErrIntOverflowExperimentEntity
					}
					if iNdEx >= l {
						return 0, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					innerWire |= (uint64(b) & 0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				innerWireType := int(innerWire & 0x7)
				if innerWireType == 4 {
					break
				}
				next, err := skipExperimentEntity(dAtA[start:])
				if err != nil {
					return 0, err
				}
				iNdEx = start + next
			}
			return iNdEx, nil
		case 4:
			return iNdEx, nil
		case 5:
			iNdEx += 4
			return iNdEx, nil
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
	}
	panic("unreachable")
}

var (
	ErrInvalidLengthExperimentEntity = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowExperimentEntity   = fmt.Errorf("proto: integer overflow")
)

func init() {
	proto.RegisterFile("experiment_entity.proto", fileDescriptor_experiment_entity_d03a197f9364100c)
}

var fileDescriptor_experiment_entity_d03a197f9364100c = []byte{
	// 178 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x4f, 0xad, 0x28, 0x48,
	0x2d, 0xca, 0xcc, 0x4d, 0xcd, 0x2b, 0x89, 0x4f, 0xcd, 0x2b, 0xc9, 0x2c, 0xa9, 0xd4, 0x2b, 0x28,
	0xca, 0x2f, 0xc9, 0x17, 0xe2, 0x42, 0x48, 0x48, 0x09, 0x20, 0xd8, 0x10, 0x59, 0x29, 0xfe, 0xb4,
	0xd2, 0xa2, 0x7c, 0xfd, 0xdc, 0xd4, 0x92, 0x44, 0x14, 0x81, 0x9c, 0xcc, 0xbc, 0x6c, 0x88, 0x80,
	0x52, 0x03, 0x23, 0x97, 0x80, 0x2b, 0x5c, 0x9b, 0x2b, 0xd8, 0x68, 0x21, 0x2d, 0x2e, 0x96, 0x94,
	0xc4, 0x92, 0x44, 0x09, 0x46, 0x05, 0x46, 0x0d, 0x6e, 0x23, 0x31, 0x3d, 0x24, 0x73, 0x11, 0x6a,
	0x83, 0xc0, 0x6a, 0x84, 0x14, 0xb8, 0x58, 0x41, 0xc6, 0x15, 0x4b, 0x30, 0x29, 0x30, 0x6b, 0x70,
	0x1b, 0x71, 0xe9, 0x81, 0x6c, 0xd0, 0xf3, 0xc9, 0xcc, 0xcb, 0x0e, 0x82, 0x48, 0x08, 0xc9, 0x71,
	0xb1, 0x80, 0x5c, 0x20, 0xc1, 0x0c, 0x36, 0x0d, 0xaa, 0xc0, 0x37, 0xb5, 0x24, 0x31, 0x08, 0x2c,
	0xee, 0xc4, 0x73, 0xe2, 0x91, 0x1c, 0xe3, 0x85, 0x47, 0x72, 0x8c, 0x0f, 0x1e, 0xc9, 0x31, 0x26,
	0xb1, 0x81, 0xdd, 0x65, 0x0c, 0x08, 0x00, 0x00, 0xff, 0xff, 0xfb, 0xe6, 0xa8, 0x5b, 0xf2, 0x00,
	0x00, 0x00,
}
