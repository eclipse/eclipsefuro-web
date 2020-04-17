// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: __bundled/BundledService.proto

package taskmanager;

/**
 * Protobuf type {@code taskmanager.GetProjectServiceRequest}
 */
public final class GetProjectServiceRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:taskmanager.GetProjectServiceRequest)
    GetProjectServiceRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use GetProjectServiceRequest.newBuilder() to construct.
  private GetProjectServiceRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private GetProjectServiceRequest() {
    prj_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new GetProjectServiceRequest();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private GetProjectServiceRequest(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    this();
    if (extensionRegistry == null) {
      throw new java.lang.NullPointerException();
    }
    com.google.protobuf.UnknownFieldSet.Builder unknownFields =
        com.google.protobuf.UnknownFieldSet.newBuilder();
    try {
      boolean done = false;
      while (!done) {
        int tag = input.readTag();
        switch (tag) {
          case 0:
            done = true;
            break;
          case 10: {
            java.lang.String s = input.readStringRequireUtf8();

            prj_ = s;
            break;
          }
          default: {
            if (!parseUnknownField(
                input, unknownFields, extensionRegistry, tag)) {
              done = true;
            }
            break;
          }
        }
      }
    } catch (com.google.protobuf.InvalidProtocolBufferException e) {
      throw e.setUnfinishedMessage(this);
    } catch (java.io.IOException e) {
      throw new com.google.protobuf.InvalidProtocolBufferException(
          e).setUnfinishedMessage(this);
    } finally {
      this.unknownFields = unknownFields.build();
      makeExtensionsImmutable();
    }
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return taskmanager.AnyProto.internal_static_taskmanager_GetProjectServiceRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return taskmanager.AnyProto.internal_static_taskmanager_GetProjectServiceRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            taskmanager.GetProjectServiceRequest.class, taskmanager.GetProjectServiceRequest.Builder.class);
  }

  public static final int PRJ_FIELD_NUMBER = 1;
  private volatile java.lang.Object prj_;
  /**
   * <code>string prj = 1;</code>
   * @return The prj.
   */
  @java.lang.Override
  public java.lang.String getPrj() {
    java.lang.Object ref = prj_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      prj_ = s;
      return s;
    }
  }
  /**
   * <code>string prj = 1;</code>
   * @return The bytes for prj.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getPrjBytes() {
    java.lang.Object ref = prj_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      prj_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  private byte memoizedIsInitialized = -1;
  @java.lang.Override
  public final boolean isInitialized() {
    byte isInitialized = memoizedIsInitialized;
    if (isInitialized == 1) return true;
    if (isInitialized == 0) return false;

    memoizedIsInitialized = 1;
    return true;
  }

  @java.lang.Override
  public void writeTo(com.google.protobuf.CodedOutputStream output)
                      throws java.io.IOException {
    if (!getPrjBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, prj_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!getPrjBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, prj_);
    }
    size += unknownFields.getSerializedSize();
    memoizedSize = size;
    return size;
  }

  @java.lang.Override
  public boolean equals(final java.lang.Object obj) {
    if (obj == this) {
     return true;
    }
    if (!(obj instanceof taskmanager.GetProjectServiceRequest)) {
      return super.equals(obj);
    }
    taskmanager.GetProjectServiceRequest other = (taskmanager.GetProjectServiceRequest) obj;

    if (!getPrj()
        .equals(other.getPrj())) return false;
    if (!unknownFields.equals(other.unknownFields)) return false;
    return true;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    hash = (37 * hash) + PRJ_FIELD_NUMBER;
    hash = (53 * hash) + getPrj().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static taskmanager.GetProjectServiceRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static taskmanager.GetProjectServiceRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static taskmanager.GetProjectServiceRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static taskmanager.GetProjectServiceRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static taskmanager.GetProjectServiceRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static taskmanager.GetProjectServiceRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static taskmanager.GetProjectServiceRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static taskmanager.GetProjectServiceRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static taskmanager.GetProjectServiceRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static taskmanager.GetProjectServiceRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static taskmanager.GetProjectServiceRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static taskmanager.GetProjectServiceRequest parseFrom(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  @java.lang.Override
  public Builder newBuilderForType() { return newBuilder(); }
  public static Builder newBuilder() {
    return DEFAULT_INSTANCE.toBuilder();
  }
  public static Builder newBuilder(taskmanager.GetProjectServiceRequest prototype) {
    return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
  }
  @java.lang.Override
  public Builder toBuilder() {
    return this == DEFAULT_INSTANCE
        ? new Builder() : new Builder().mergeFrom(this);
  }

  @java.lang.Override
  protected Builder newBuilderForType(
      com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
    Builder builder = new Builder(parent);
    return builder;
  }
  /**
   * Protobuf type {@code taskmanager.GetProjectServiceRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:taskmanager.GetProjectServiceRequest)
      taskmanager.GetProjectServiceRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return taskmanager.AnyProto.internal_static_taskmanager_GetProjectServiceRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return taskmanager.AnyProto.internal_static_taskmanager_GetProjectServiceRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              taskmanager.GetProjectServiceRequest.class, taskmanager.GetProjectServiceRequest.Builder.class);
    }

    // Construct using taskmanager.GetProjectServiceRequest.newBuilder()
    private Builder() {
      maybeForceBuilderInitialization();
    }

    private Builder(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      super(parent);
      maybeForceBuilderInitialization();
    }
    private void maybeForceBuilderInitialization() {
      if (com.google.protobuf.GeneratedMessageV3
              .alwaysUseFieldBuilders) {
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      prj_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return taskmanager.AnyProto.internal_static_taskmanager_GetProjectServiceRequest_descriptor;
    }

    @java.lang.Override
    public taskmanager.GetProjectServiceRequest getDefaultInstanceForType() {
      return taskmanager.GetProjectServiceRequest.getDefaultInstance();
    }

    @java.lang.Override
    public taskmanager.GetProjectServiceRequest build() {
      taskmanager.GetProjectServiceRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public taskmanager.GetProjectServiceRequest buildPartial() {
      taskmanager.GetProjectServiceRequest result = new taskmanager.GetProjectServiceRequest(this);
      result.prj_ = prj_;
      onBuilt();
      return result;
    }

    @java.lang.Override
    public Builder clone() {
      return super.clone();
    }
    @java.lang.Override
    public Builder setField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.setField(field, value);
    }
    @java.lang.Override
    public Builder clearField(
        com.google.protobuf.Descriptors.FieldDescriptor field) {
      return super.clearField(field);
    }
    @java.lang.Override
    public Builder clearOneof(
        com.google.protobuf.Descriptors.OneofDescriptor oneof) {
      return super.clearOneof(oneof);
    }
    @java.lang.Override
    public Builder setRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        int index, java.lang.Object value) {
      return super.setRepeatedField(field, index, value);
    }
    @java.lang.Override
    public Builder addRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.addRepeatedField(field, value);
    }
    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof taskmanager.GetProjectServiceRequest) {
        return mergeFrom((taskmanager.GetProjectServiceRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(taskmanager.GetProjectServiceRequest other) {
      if (other == taskmanager.GetProjectServiceRequest.getDefaultInstance()) return this;
      if (!other.getPrj().isEmpty()) {
        prj_ = other.prj_;
        onChanged();
      }
      this.mergeUnknownFields(other.unknownFields);
      onChanged();
      return this;
    }

    @java.lang.Override
    public final boolean isInitialized() {
      return true;
    }

    @java.lang.Override
    public Builder mergeFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      taskmanager.GetProjectServiceRequest parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (taskmanager.GetProjectServiceRequest) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private java.lang.Object prj_ = "";
    /**
     * <code>string prj = 1;</code>
     * @return The prj.
     */
    public java.lang.String getPrj() {
      java.lang.Object ref = prj_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        prj_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string prj = 1;</code>
     * @return The bytes for prj.
     */
    public com.google.protobuf.ByteString
        getPrjBytes() {
      java.lang.Object ref = prj_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        prj_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string prj = 1;</code>
     * @param value The prj to set.
     * @return This builder for chaining.
     */
    public Builder setPrj(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      prj_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string prj = 1;</code>
     * @return This builder for chaining.
     */
    public Builder clearPrj() {
      
      prj_ = getDefaultInstance().getPrj();
      onChanged();
      return this;
    }
    /**
     * <code>string prj = 1;</code>
     * @param value The bytes for prj to set.
     * @return This builder for chaining.
     */
    public Builder setPrjBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      prj_ = value;
      onChanged();
      return this;
    }
    @java.lang.Override
    public final Builder setUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.setUnknownFields(unknownFields);
    }

    @java.lang.Override
    public final Builder mergeUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.mergeUnknownFields(unknownFields);
    }


    // @@protoc_insertion_point(builder_scope:taskmanager.GetProjectServiceRequest)
  }

  // @@protoc_insertion_point(class_scope:taskmanager.GetProjectServiceRequest)
  private static final taskmanager.GetProjectServiceRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new taskmanager.GetProjectServiceRequest();
  }

  public static taskmanager.GetProjectServiceRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<GetProjectServiceRequest>
      PARSER = new com.google.protobuf.AbstractParser<GetProjectServiceRequest>() {
    @java.lang.Override
    public GetProjectServiceRequest parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new GetProjectServiceRequest(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<GetProjectServiceRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<GetProjectServiceRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public taskmanager.GetProjectServiceRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

