// @generated by protoc-gen-es v1.3.1 with parameter "target=js"
// @generated from file bilibili/app/archive/middleware/v1/preload.proto (package bilibili.app.archive.middleware.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * 视频秒开参数
 *
 * @generated from message bilibili.app.archive.middleware.v1.PlayerArgs
 */
export const PlayerArgs = proto3.makeMessageType(
  "bilibili.app.archive.middleware.v1.PlayerArgs",
  () => [
    { no: 1, name: "qn", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "fnver", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "fnval", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "force_host", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "voice_balance", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

