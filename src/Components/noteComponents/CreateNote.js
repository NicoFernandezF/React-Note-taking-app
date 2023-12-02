import { React } from "react";
function CreateNote({ textHandlerTitle, textHandlerBody, saveHandler, inputTextTitle, inputTextBody }) {
    return (
        <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
            <textarea id="note__title"
                cols="10"
                rows="1"
                value={inputTextTitle}
                placeholder="Title...."
                onChange={textHandlerTitle}
                maxLength="1000"
                style={{ fontWeight: 'bold' }}
            ></textarea>
            <p className="divider">————————————————</p>
            <textarea id="note__body"
                cols="10"
                rows="4"
                value={inputTextBody}
                placeholder="Body...."
                onChange={textHandlerBody}
                maxLength="1000"
            ></textarea>

            <div className="note__footer">
                <button className="note__save" onClick={saveHandler}>
                    Save
                </button>
            </div>
        </div >
    );
}
export default CreateNote;