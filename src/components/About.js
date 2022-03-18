import React from "react";
import Card from "../ui/Card";
import Title from "../ui/Title";

function About() {
  return (
    <div className="px-7 w-full mt-1 mx-5 my-5 bg-blue-100 rounded py-32 self-center">
      <Card additionalcss="w-full h-132 bg-blue-200 py-32 self-center ">
        <Title>Username</Title>
        <div>Hello</div>
      </Card>
      Hello
    </div>
  );
}

export default About;
