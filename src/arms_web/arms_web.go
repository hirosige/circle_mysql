package main

import "cmds"

func main() {
	if err := cmds.RootCmd.Execute(); err != nil {
		fmt.Println(err)
		os.Exit(-1)
	}
}