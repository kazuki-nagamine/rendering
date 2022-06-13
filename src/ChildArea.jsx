//propsに変更がない限り再レンダリングさせたくない場合にmemoを使用する。
import { memo } from "react";
const style = {
  with: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChildAreaがレンダリングされた");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});

//サイレンdなリングが起きる要件
//1 stateが更新されたコンポーネントは再レンダリング
//2 propsが変更されたコンポーネントは再レンダリング
//3 再レンダリングされたコンポーネント配下の子要素は再レンダリング
