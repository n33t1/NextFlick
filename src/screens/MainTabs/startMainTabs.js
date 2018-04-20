import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource("ios-heart-outline", 25),
        Icon.getImageSource("ios-add", 25),
        Icon.getImageSource("ios-contact-outline", 25)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "movie-db.FindMovieScreen",
                    label: "My List",
                    title: "My List",
                    icon: sources[0]
                },
                {
                    screen: "movie-db.ShareMovieScreen",
                    label: "Dashboard",
                    title: "Dashboard",
                    icon: sources[1]
                },
                {
                    screen: "movie-db.UserSettingsScreen",
                    label: "Settings",
                    title: "Settings",
                    icon: sources[2]
                }
            ]
        });
    });
};

export default startTabs;