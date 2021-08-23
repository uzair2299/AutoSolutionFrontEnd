import DriveEtaIcon from '@material-ui/icons/DriveEta';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AUTOSOLUTIONPATH from '../../Routing/AutoSolutionPath'

export const SideBarData = [
    {
        title: "Dashboard",
        path: AUTOSOLUTIONPATH.DASHBOARD,
        icon: <DashboardIcon></DashboardIcon>,
        nested:false
    },
    {
        title: "Manage Auto Manufacturer",
        path: AUTOSOLUTIONPATH.AUTOMANUFACTURER,
        icon: <DriveEtaIcon></DriveEtaIcon>,
        nested:true
    }

]