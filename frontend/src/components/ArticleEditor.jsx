import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import React, { useEffect } from "react";

const ArticleEditor = ({ value, onChange }) => {
    const { quill, quillRef } = useQuill({
        theme: "snow",
        modules: {
            toolbar: [
                [{ header: [1, 2, 3, false] }],
                ["bold", "italic", "underline", "strike"],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ color: [] }, { background: [] }],
                ["link", "image"],
                ["clean"],
            ],
        },
    });

    // Sync value → editor
    useEffect(() => {
        //quill.format('color', '#f0f0f0');
          if (!quill || value === undefined) return;

  // Only update if value is different from editor content
  const current = quill.root.innerHTML;
  if (value !== current) {
    const delta = quill.clipboard.convert(value);
    quill.setContents(delta, "silent"); // update without triggering text-change
  }
    }, [quill, value]);

    // Sync editor → parent
    useEffect(() => {
        if (!quill) return;

        const handler = () => {
            onChange?.(quill.root.innerHTML);
        };

        quill.on("text-change", handler);
        return () => quill.off("text-change", handler);
    }, [quill, onChange]);

    return (
        <div style={{ height: "100%" }}>
            <div ref={quillRef} />
        </div>
    );
};

export default ArticleEditor;
