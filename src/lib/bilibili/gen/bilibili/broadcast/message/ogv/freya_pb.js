// @generated by protoc-gen-es v1.3.1 with parameter "target=js"
// @generated from file bilibili/broadcast/message/ogv/freya.proto (package bilibili.broadcast.message.ogv, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * 播放状态
 *
 * @generated from enum bilibili.broadcast.message.ogv.PlayStatus
 */
export const PlayStatus = proto3.makeEnum(
  "bilibili.broadcast.message.ogv.PlayStatus",
  [
    {no: 0, name: "Pause"},
    {no: 1, name: "Play"},
    {no: 2, name: "End"},
  ],
);

/**
 * 房间类型
 *
 * @generated from enum bilibili.broadcast.message.ogv.RoomType
 */
export const RoomType = proto3.makeEnum(
  "bilibili.broadcast.message.ogv.RoomType",
  [
    {no: 0, name: "Private"},
    {no: 1, name: "Open"},
  ],
);

/**
 * 信息通知发送领域
 *
 * @generated from enum bilibili.broadcast.message.ogv.MessageDomain
 */
export const MessageDomain = proto3.makeEnum(
  "bilibili.broadcast.message.ogv.MessageDomain",
  [
    {no: 0, name: "DefaultDomain"},
    {no: 1, name: "RoomMid"},
    {no: 2, name: "SystemInfo"},
  ],
);

/**
 * 通知信息类型
 *
 * @generated from enum bilibili.broadcast.message.ogv.MessageType
 */
export const MessageType = proto3.makeEnum(
  "bilibili.broadcast.message.ogv.MessageType",
  [
    {no: 0, name: "DefaultType"},
    {no: 1, name: "ChatMessage"},
    {no: 2, name: "SystemMessage"},
  ],
);

/**
 * 触发通知类型
 *
 * @generated from enum bilibili.broadcast.message.ogv.TriggerType
 */
export const TriggerType = proto3.makeEnum(
  "bilibili.broadcast.message.ogv.TriggerType",
  [
    {no: 0, name: "DefaultTrigger"},
    {no: 1, name: "Relation"},
  ],
);

/**
 * 房间人员变更事件
 *
 * @generated from message bilibili.broadcast.message.ogv.RoomMemberChangeEvent
 */
export const RoomMemberChangeEvent = proto3.makeMessageType(
  "bilibili.broadcast.message.ogv.RoomMemberChangeEvent",
  () => [
    { no: 1, name: "room_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "owner_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "members", kind: "message", T: UserInfoProto, repeated: true },
    { no: 4, name: "message", kind: "message", T: MessageProto },
  ],
);

/**
 * 播放进度同步事件
 *
 * @generated from message bilibili.broadcast.message.ogv.ProgressSyncEvent
 */
export const ProgressSyncEvent = proto3.makeMessageType(
  "bilibili.broadcast.message.ogv.ProgressSyncEvent",
  () => [
    { no: 1, name: "room_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "season_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "episode_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "status", kind: "enum", T: proto3.getEnumType(PlayStatus) },
    { no: 5, name: "progress", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "message", kind: "message", T: MessageProto },
  ],
);

/**
 * 房间状态更新
 *
 * @generated from message bilibili.broadcast.message.ogv.RoomUpdateEvent
 */
export const RoomUpdateEvent = proto3.makeMessageType(
  "bilibili.broadcast.message.ogv.RoomUpdateEvent",
  () => [
    { no: 1, name: "room_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(RoomType) },
    { no: 3, name: "message", kind: "message", T: MessageProto },
  ],
);

/**
 * 房间销毁通知
 *
 * @generated from message bilibili.broadcast.message.ogv.RoomDestroyEvent
 */
export const RoomDestroyEvent = proto3.makeMessageType(
  "bilibili.broadcast.message.ogv.RoomDestroyEvent",
  () => [
    { no: 1, name: "room_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "message", kind: "message", T: MessageProto },
  ],
);

/**
 * 房间触发通知
 *
 * @generated from message bilibili.broadcast.message.ogv.RoomTriggerEvent
 */
export const RoomTriggerEvent = proto3.makeMessageType(
  "bilibili.broadcast.message.ogv.RoomTriggerEvent",
  () => [
    { no: 1, name: "mid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "message", kind: "message", T: MessageProto },
    { no: 3, name: "trigger", kind: "enum", T: proto3.getEnumType(TriggerType) },
  ],
);

/**
 * 用户信息
 *
 * @generated from message bilibili.broadcast.message.ogv.UserInfoProto
 */
export const UserInfoProto = proto3.makeMessageType(
  "bilibili.broadcast.message.ogv.UserInfoProto",
  () => [
    { no: 1, name: "mid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "face", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "nickname", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "level", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "sign", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "vip", kind: "message", T: VipProto },
    { no: 7, name: "official", kind: "message", T: OfficialProto },
    { no: 8, name: "pendant", kind: "message", T: PendantProto },
    { no: 9, name: "buvid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * 通知信息
 *
 * @generated from message bilibili.broadcast.message.ogv.MessageProto
 */
export const MessageProto = proto3.makeMessageType(
  "bilibili.broadcast.message.ogv.MessageProto",
  () => [
    { no: 1, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "content_type", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * 大会员信息
 *
 * @generated from message bilibili.broadcast.message.ogv.VipProto
 */
export const VipProto = proto3.makeMessageType(
  "bilibili.broadcast.message.ogv.VipProto",
  () => [
    { no: 1, name: "type", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "status", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "due_date", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "vip_pay_type", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "theme_type", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "avatar_subscript", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 7, name: "nickname_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * 认证信息
 *
 * @generated from message bilibili.broadcast.message.ogv.OfficialProto
 */
export const OfficialProto = proto3.makeMessageType(
  "bilibili.broadcast.message.ogv.OfficialProto",
  () => [
    { no: 1, name: "role", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "desc", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "type", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * 挂件信息
 *
 * @generated from message bilibili.broadcast.message.ogv.PendantProto
 */
export const PendantProto = proto3.makeMessageType(
  "bilibili.broadcast.message.ogv.PendantProto",
  () => [
    { no: 1, name: "pid", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "image", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "expire", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "image_enhance", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * 通用信息通知
 *
 * @generated from message bilibili.broadcast.message.ogv.MessageEvent
 */
export const MessageEvent = proto3.makeMessageType(
  "bilibili.broadcast.message.ogv.MessageEvent",
  () => [
    { no: 1, name: "room_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "msg_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "ts", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "oid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "domain", kind: "enum", T: proto3.getEnumType(MessageDomain) },
    { no: 6, name: "type", kind: "enum", T: proto3.getEnumType(MessageType) },
    { no: 7, name: "message", kind: "message", T: MessageProto },
    { no: 8, name: "user", kind: "message", T: UserInfoProto },
    { no: 9, name: "msg_id2", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * 聊天信息清除通知
 *
 * @generated from message bilibili.broadcast.message.ogv.RemoveChatEvent
 */
export const RemoveChatEvent = proto3.makeMessageType(
  "bilibili.broadcast.message.ogv.RemoveChatEvent",
  () => [
    { no: 1, name: "room_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "msg_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "message", kind: "message", T: MessageProto },
  ],
);

/**
 * "一起看"房间事件
 *
 * @generated from message bilibili.broadcast.message.ogv.FreyaEventBody
 */
export const FreyaEventBody = proto3.makeMessageType(
  "bilibili.broadcast.message.ogv.FreyaEventBody",
  () => [
    { no: 1, name: "room_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "white_mid", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 3, name: "ignore_mid", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 4, name: "member_change", kind: "message", T: RoomMemberChangeEvent, oneof: "event" },
    { no: 5, name: "progress", kind: "message", T: ProgressSyncEvent, oneof: "event" },
    { no: 6, name: "room_update", kind: "message", T: RoomUpdateEvent, oneof: "event" },
    { no: 7, name: "message", kind: "message", T: MessageEvent, oneof: "event" },
    { no: 8, name: "remove_chat", kind: "message", T: RemoveChatEvent, oneof: "event" },
    { no: 9, name: "room_destroy", kind: "message", T: RoomDestroyEvent, oneof: "event" },
    { no: 10, name: "room_trigger", kind: "message", T: RoomTriggerEvent, oneof: "event" },
    { no: 100, name: "sequence_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

