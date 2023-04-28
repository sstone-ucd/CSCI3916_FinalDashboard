//create styled component to reuse on the page 
const { Box } = require("@mui/material");
const { styled } = require("@mui/system"); 
const FlexBetween = styled(Box)({
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "center"
});

export default FlexBetween; 