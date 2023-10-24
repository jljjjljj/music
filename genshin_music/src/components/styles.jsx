// @mui
import { styled } from "@mui/material/styles";
import { ListItemIcon, ListItemButton } from "@mui/material";

// ----------------------------------------------------------------------

export const StyledNavItem = styled((props) => (
  <ListItemButton disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.body2,
  height: 60,
  width: "220px",
  position: "relative",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
  borderRadius: "10px",
  marginTop: "10px",
  transition: "transform 0.2s",
  fontSize: "18px",
  "&:hover": {
    backgroundColor: "rgba(208, 240, 209,0.7)", // Change to your desired color
    color: "#30953b",
    transform: "scale(0.95)",
  },
}));

export const StyledNavItemIcon = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
