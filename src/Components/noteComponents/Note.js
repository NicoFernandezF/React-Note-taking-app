
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';


function Note({ id, title, body, deleteNote }) {

    return (
        <div className="note">
            <div className="note__title" >{title}</div>
            <p className="divider">————————————————</p>
            <div className="note__body">{body}</div>
            <div className="note__footer" style={{ justifyContent: "start" }}>
                <DeleteForeverOutlinedIcon
                    className="note__delete"
                    onClick={() => deleteNote(id)}
                    aria-hidden="true"
                ></DeleteForeverOutlinedIcon>
            </div>

        </div>
    );
}
export default Note;