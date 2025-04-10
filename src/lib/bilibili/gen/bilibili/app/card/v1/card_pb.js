// @generated by protoc-gen-es v1.3.1 with parameter "target=js"
// @generated from file bilibili/app/card/v1/card.proto (package bilibili.app.card.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { DynamicHot, HotTopic, LargeCoverV1, LargeCoverV4, MiddleCoverV3, PopularTopEntrance, RcmdOneItem, SmallCoverV5, SmallCoverV5Ad, ThreeItemAllV2, ThreeItemV1 } from "./single_pb.js";

/**
 * 卡片信息
 *
 * @generated from message bilibili.app.card.v1.Card
 */
export const Card = proto3.makeMessageType(
  "bilibili.app.card.v1.Card",
  () => [
    { no: 1, name: "small_cover_v5", kind: "message", T: SmallCoverV5, oneof: "item" },
    { no: 2, name: "large_cover_v1", kind: "message", T: LargeCoverV1, oneof: "item" },
    { no: 3, name: "three_item_all_v2", kind: "message", T: ThreeItemAllV2, oneof: "item" },
    { no: 4, name: "three_item_v1", kind: "message", T: ThreeItemV1, oneof: "item" },
    { no: 5, name: "hot_topic", kind: "message", T: HotTopic, oneof: "item" },
    { no: 6, name: "three_item_h_v5", kind: "message", T: DynamicHot, oneof: "item" },
    { no: 7, name: "middle_cover_v3", kind: "message", T: MiddleCoverV3, oneof: "item" },
    { no: 8, name: "large_cover_v4", kind: "message", T: LargeCoverV4, oneof: "item" },
    { no: 9, name: "popular_top_entrance", kind: "message", T: PopularTopEntrance, oneof: "item" },
    { no: 10, name: "rcmd_one_item", kind: "message", T: RcmdOneItem, oneof: "item" },
    { no: 11, name: "small_cover_v5_ad", kind: "message", T: SmallCoverV5Ad, oneof: "item" },
  ],
);

