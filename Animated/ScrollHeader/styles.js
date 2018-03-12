import { StyleSheet, Dimensions } from 'react-native';
import { Constants } from 'expo';

// constants
import { Layout, navigationPadding, FontSizes } from './constant.js';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // marginTop: Constants.statusBarHeight
    },
    statusBar: {
        height: Constants.statusBarHeight,
        backgroundColor: '#fff',
        zIndex:1
    },
    header: {
        height: Layout.header,
        backgroundColor: '#fff',
        position: 'absolute',
        top: Constants.statusBarHeight,
        left: 0,
        right: 0,
        justifyContent: 'flex-end'
    },
    appBar: {
        backgroundColor: 'red',
        height: Layout.appBarHeight,
        // top:0,
        // zIndex: 1,
        // flexDirection: 'row'
    },
    appBarIconLeft: {
        width: 44 / 3,
        height: Layout.appBarHeight,
        marginLeft: 10,
        justifyContent: 'center'
    },
    appBarTitleLeft: {
        flex: 1,
        justifyContent: 'center'
    },
    appBarTitleCenter: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    appBarIconRight: {
        flex: 1.5, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 10
    },
    searchBarHeight: {
        height: Layout.searchBarHeight,
        paddingLeft: 8,
        paddingRight: 8,
        justifyContent: 'center',
        position: 'absolute',
        top: Layout.appBarHeight + Layout.largeTopBarHeight,
        right: 0,
        left: 0
    },
    searchBox: {
        height: Layout.searchBoxHeight,
        backgroundColor: 'rgba(142,142,147,.12)',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10
    },
    textInputIcon: {
        width: 14,
        height: 14
    }
});