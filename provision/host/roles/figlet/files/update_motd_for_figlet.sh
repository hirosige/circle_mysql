#!/bin/bash
# Description:UpdateMotd for Figlet
# 2013/07/15 @ysaotome

FILE_MOTD='/etc/motd'

BIN_DATE='/bin/date'
BIN_FIGLET='/usr/bin/figlet'
BIN_HOSTNAME='/bin/hostname'
BIN_IP='/sbin/ip'
BIN_GREP='/bin/grep'
BIN_SED='/bin/sed'
BIN_UPTIME='/usr/bin/uptime'
BIN_CAT='/bin/cat'
BIN_UNAME='/bin/uname'
BIN_FREE='/usr/bin/free'
BIN_HEAD='/usr/bin/head'
BIN_TAIL='/usr/bin/tail'
BIN_DF='/bin/df'
BIN_AWK='/bin/awk'
BIN_PS='/bin/ps'
BIN_BC='/bin/bc'

COLOR_LIGHT_GREEN='\033[1;32m'
COLOR_LIGHT_BLUE='\033[1;34m'
COLOR_YELLOW='\033[1;33m'
COLOR_RED='\033[0;31m'
COLOR_WHITE='\033[1;37m'
COLOR_DEFAULT='\033[0m'

echo -e "
${COLOR_LIGHT_GREEN}$(${BIN_FIGLET} -ckw 120 $(${BIN_HOSTNAME}))
${COLOR_WHITE}Motd Updated          : ${COLOR_LIGHT_BLUE}$(${BIN_DATE})
${COLOR_WHITE}Hostname              = ${COLOR_LIGHT_BLUE}$(${BIN_HOSTNAME})
${COLOR_WHITE}Local IP Address      = ${COLOR_LIGHT_BLUE}$(${BIN_IP} addr show lo 2>/dev/null | ${BIN_GREP} 'inet ' | ${BIN_SED} -e 's/.*inet \([^ ]*\)\/.*/\1/')
${COLOR_WHITE}Privte IP Address     = ${COLOR_LIGHT_BLUE}$(${BIN_IP} addr show enp0s8 2>/dev/null | ${BIN_GREP} 'inet ' | ${BIN_SED} -e 's/.*inet \([^ ]*\)\/.*/\1/')
${COLOR_WHITE}Uptime                = ${COLOR_LIGHT_BLUE}$(${BIN_UPTIME} | ${BIN_SED} -e 's/^ //')
${COLOR_WHITE}Release               = ${COLOR_LIGHT_BLUE}$(${BIN_CAT} /etc/issue.net)
${COLOR_WHITE}Kernel                = ${COLOR_LIGHT_BLUE}$(${BIN_UNAME} -orpi)
${COLOR_WHITE}CPU Usage (Core)      = ${COLOR_LIGHT_BLUE}$(echo $(${BIN_PS} -eo pcpu | ${BIN_AWK} 'NR>1' | ${BIN_AWK} '{tot=tot+$1} END {print tot}') / $(${BIN_CAT} /proc/cpuinfo | ${BIN_GREP} -c processor) | ${BIN_BC} )%
${COLOR_WHITE}Memory  Used/Total    = ${COLOR_LIGHT_BLUE}$(${BIN_FREE} -m | ${BIN_HEAD} -n 2 | ${BIN_TAIL} -n 1 | ${BIN_AWK} {'print $3'})/$(${BIN_FREE} -m | ${BIN_HEAD} -n 2 | ${BIN_TAIL} -n 1 | ${BIN_AWK} {'print $2'})MB
${COLOR_WHITE}Swap    Used/Total    = ${COLOR_LIGHT_BLUE}$(${BIN_FREE} -m | tail -n 1 | ${BIN_AWK} {'print $3'})/$(${BIN_FREE} -m | ${BIN_TAIL} -n 1 | ${BIN_AWK} {'print $2'})MB
${COLOR_WHITE}Disk(/) Used/Total    = ${COLOR_LIGHT_BLUE}$(${BIN_DF} -h / | tail -n 1 | ${BIN_AWK} {'print $3'})/$(${BIN_DF} -h / | ${BIN_TAIL} -n 1 | ${BIN_AWK} {'print $2'})
"
