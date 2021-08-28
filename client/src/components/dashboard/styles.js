import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
    return {
        root: (props) => ({
            position: "relative",
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }),
        pingButton: {
            cursor: "pointer"
        }
    }
})