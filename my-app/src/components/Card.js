import React from "react";

import nerdimage from "../assets/Images/illustration.png";
import { Buttoncontainer, Cardcontainer } from "./styles/Container.styles";
import { Contentcontainer } from "./styles/Container.styles";
import Button from "./Button";
import { H1, P, Tag, Image } from "./styles/Elements.styles";

const Card = () => {
  return (
    <Cardcontainer>
      <Contentcontainer>
        <Tag>EXCLUSIVE </Tag>
        <H1> React styled components</H1>
        <P>
          Styled Components is a library that, through a set of practices,
          solves complex CSS problems.
        </P>
        <Buttoncontainer>
          <Button
            link="https://www.facebook.com/profile.php?id=100069593825824"
            text=" watch now"
          />
          <Button link="https://github.com/hasanmd91" text=" Github Repo" />
        </Buttoncontainer>
      </Contentcontainer>

      <Image src={nerdimage} text="nerimage" width="300px" />
    </Cardcontainer>
  );
};

export default Card;
