import React from "react";
import { Button } from "@chakra-ui/react";

const AuthButtons: React.FC = () => {
  return (
    <>
      <Button
        variant="outline"
        sx={styles}
        // onClick={() => {}}
      >
        Log in
      </Button>
      <Button
        sx={styles}
      >
        Sign up
      </Button>
    </>
  );
};
export default AuthButtons;

const styles = {
  height: "28px",
  display: { base: "none", sm: "flex" },
  width: { base: "70px", sm: "110px" },
  mr: 2,
};