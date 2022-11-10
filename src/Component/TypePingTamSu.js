import React, { useState, useEffect } from "react";
const words = ["3 năm là một chặn đường không quá dài cũng không quá ngắn. Nhiều lúc anh lỳ như con trâu em la anh cũng như dị đó, ùi xong cái anh mần em buồn. Em la là chỉ muốn tốt cho anh hoi, anh biết mờ. ANH YÊU EM nếu mờ thời gian có quay lợi thì anh vẫn chọn em. Em đem lại cho anh cảm xúc khó tả lắm. Anh ngữ văn có 5 điểm hà không biết nói gì thêm un chỉ biết nói là ANH YÊU EM, cảm ơn em đã bên anh đến thời điểm này mình cùng nhau cố gắng đi vèo vèo tới tương lai nhó BẢO NHIII CUTEEE CỦA ANH. ANH YÊU EMMMMMM."];

export default function TypingTamSu() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (index === words.length) return;

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <>
      <h1>{`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}</h1>
    </>
  );
}
