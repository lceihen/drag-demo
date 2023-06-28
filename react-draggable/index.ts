import Draggable from "react-draggable";
import { PageContainer } from "@ant-design/pro-layout";
import { Layout, Card } from "antd";
import styles from "./index.module.less";
import { useState } from "react";
const DragFlowModule = () => {
  const handleStart = () => {};
  const handleDrag = () => {};
  const handleStop = () => {};
  // const dragRef = useState(document.querySelector('#drag_contain'));
  return (
    <PageContainer>
      <section className={styles.contain} id="drag_contain">
        <Draggable
          bounds="parent"
          axis="both"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[1, 1]}
          scale={1}
          onStart={handleStart}
          onDrag={handleDrag}
          onStop={handleStop}
        >
          <div className={styles.drag_inner_contain}>
            <div className="handle">Drag from here</div>
            <div className="handle">This readme is really dragging on...</div>
          </div>
        </Draggable>
        <Draggable
          bounds="parent"
          axis="both"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          // grid={[1, 1]}
          // scale={1.5}
          onStart={handleStart}
          onDrag={handleDrag}
          onStop={handleStop}
        >
          <div className={styles.drag_inner_contain}>
            <div className="handle">Drag from here</div>
            <div className="handle">This readme is really dragging on...</div>
          </div>
        </Draggable>
      </section>
    </PageContainer>
  );
};
export default DragFlowModule;
