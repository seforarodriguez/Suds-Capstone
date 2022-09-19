import { CleanerView } from "./CleanerView"
import { HostView } from "./HostView"


export const ApplicationViews = () => {
	const localSudsUser = localStorage.getItem("suds_user")
    const SudsUserObject = JSON.parse(localSudsUser)

        if(SudsUserObject.host) {
            //return host views
            return < HostView />
        } else {
            //return cleaner views
            return <CleanerView />
        }
}