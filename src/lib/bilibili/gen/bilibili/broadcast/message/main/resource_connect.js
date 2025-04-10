// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=js"
// @generated from file bilibili/broadcast/message/main/resource.proto (package bilibili.broadcast.message.main, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Empty, MethodKind } from "@bufbuild/protobuf";
import { TopActivityReply } from "./resource_pb.js";

/**
 * @generated from service bilibili.broadcast.message.main.Resource
 */
export const Resource = {
  typeName: "bilibili.broadcast.message.main.Resource",
  methods: {
    /**
     * @generated from rpc bilibili.broadcast.message.main.Resource.TopActivity
     */
    topActivity: {
      name: "TopActivity",
      I: Empty,
      O: TopActivityReply,
      kind: MethodKind.ServerStreaming,
    },
  }
};

