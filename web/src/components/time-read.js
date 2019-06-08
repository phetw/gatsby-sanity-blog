import React, { memo } from "react";
import { wordCount } from "../lib/helpers";

const TimeToRead = memo(({ body }) => {
  return <>• 📚 {wordCount(body)} min read</>;
});

export default TimeToRead;
