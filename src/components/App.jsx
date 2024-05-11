import React from "react";
import ConditinalRendering1 from "./ConditinalRendering1";
import ConditinalRendering3 from "./ConditinalRendering3";
import RenderingLists3 from "./RenderingLists3";
import RespondingToEvents2 from "./RespondingToEvents2";
import QueueingState1 from "./QueueingState1";
import QueueingState2 from "./QueueingState2";
import UpdatingObjectsState2 from "./UpdatingObjectsState2";
import UpdatingArraysState2 from "./UpdatingArraysState2";
import UpdatingArraysState3 from "./UpdatingArraysState3";
import StateStructure1 from "./StateStructure1";
import StateStructure2 from "./StateStructure2";
import StateStructure3 from "./StateStructure3";
import StateStructure4 from "./StateStructure4";
import SharingState1 from "./SharingState1";
import SharingState2 from "./SharingState2";
import PreserveResetState1 from "./PreserveResetState1";
import PreserveResetState2 from "./PreserveResetState2";
import PreserveResetState3 from "./PreserveResetState3";
import PreserveResetState4 from "./PreserveResetState4";
import PreserveResetState5 from "./PreserveResetState5";

export default function App() {
  return (
    <div className="container">
      {/* 条件付きレンダー（? : を使って未梱包アイコンを表示）*/}
      <ConditinalRendering1 />
      {/* 条件付きレンダー（連続する ? : を if と変数にリファクタ ）*/}
      <ConditinalRendering3 />
      {/* リストのレンダー （リスト要素のコンポーネントを抽出 ）*/}
      <RenderingLists3 />
      {/* イベントへの応答（イベントを接続) */}
      <RespondingToEvents2 />
      {/* 一連の state の更新をキューに入れる（リクエストカウンタの修正）*/}
      <QueueingState1 />
      {/* 一連の state の更新をキューに入れる（state キューの独自実装 ）*/}
      <QueueingState2 />
      {/* state 内のオブジェクトの更新（ミューテーションを探して修正） */}
      <UpdatingObjectsState2 />
      {/* state 内の配列の更新（ショッピングカートから商品を削除） */}
      <UpdatingArraysState2 />
      {/* state 内の配列の更新（ミューテーションを行わないように修正） */}
      <UpdatingArraysState3 />
      {/* state 構造の選択（更新されないコンポーネントの修正）*/}
      <StateStructure1 />
      {/* state 構造の選択（壊れた荷物リストの修正 ）*/}
      <StateStructure2 />
      {/* state 構造の選択（選択項目が消える問題を修正 ）*/}
      <StateStructure3 />
      {/* state 構造の選択（複数選択を実装）*/}
      <StateStructure4 />
      {/* コンポーネント間で state を共有する（入力欄の同期）*/}
      <SharingState1 />
      {/* コンポーネント間で state を共有する（リストのフィルタリング）*/}
      <SharingState2 />
      {/* state の保持とリセット（入力テキストの消失を修正 ）*/}
      <PreserveResetState1 />
      {/* state の保持とリセット（2 つのフィールドを入れ替え）*/}
      <PreserveResetState2 />
      {/* state の保持とリセット（詳細フォームをリセット) */}
      <PreserveResetState3 />
      {/* state の保持とリセット（読み込み中に画像をクリア) */}
      <PreserveResetState4 />
      {/* state の保持とリセット（リスト内の state 位置ズレを修正) */}
      <PreserveResetState5 />
    </div>
  );
}
