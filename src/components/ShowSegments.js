import { Segment} from "../common/Segment/Segment";
import React, { useRef } from "react";

export function ShowSegments() {
    return (
        <div className="container">
            <Segment
                controlRef={useRef()}
                size="tiny"
                type="fluid"
                activeTab={1}
                segments={[
                    {
                        label: "value3",
                        ref: useRef()
                    },
                    {
                        label: "value33333",
                        ref: useRef()
                    },
                    {
                        label: "value33333333333",
                        ref: useRef()
                    }
                ]}
            />
            <Segment
                controlRef={useRef()}
                size="small"
                type="default"
                segments={[
                    {
                        label: "value",
                        ref: useRef()
                    },
                    {
                        label: "value2222222",
                        ref: useRef()
                    },
                    {
                        label: "value222",
                        ref: useRef()
                    }
                ]}
            />
            <Segment
                controlRef={useRef()}
                size="large"
                type="fluid"
                segments={[
                    {
                        label: "value1",
                        ref: useRef()
                    },
                    {
                        label: "value111111111111111",
                        ref: useRef()
                    },
                ]}
            />
        </div>
    );
}
