import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function ArticleEditor() {
    const [content, setContent] = useState("");
    useEffect(()=>{
        //outstream(content);
    },[content])
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline"],
            [{ align: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"]
        ]
    };
    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "list",
        "bullet",
        "link",
        "align",
        "image"
    ];

    return (
        <div>
            <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                modules={modules}
                formats={formats}
                placeholder="Start writing your article..."
            />
        </div>
    );
}

export default ArticleEditor;