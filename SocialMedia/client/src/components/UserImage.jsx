import { Box } from "@mui/material";

const userImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{
          objectFit: "cover",
          borderRadius: "50%",
        }}
        width={size}
        height={size}
        alt="User Profile"
        src={`http://localhost:3001/assets/${image}`}
      />
    </Box>
  );
};

export default userImage;
