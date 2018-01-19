package cmds

import (
	"fmt"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

var RootCmd = &cobra.Command {
	Use: "arms_web",
	Short: "This tool is pretty cool.",
	Long: "This tool is a great convenience.",
	Run: func(cmds *cobra.Command, args []string) {

	},
}

func init() {
	cobra.OnInitialize()
	RootCmd.AddCommand(versionCmd)
}

var versionCmd = &cobra.Command {
	Use: "version",
	Short: "Print the version number of arms_web",
	Long: "All software has versions. This is arms_web's",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("arms_web v1.0")
	},
}
