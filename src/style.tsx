const styles = {
    mainContainer:{
            direction: 'rtl',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
    },
    topMenuStyle:{    
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:'17px',
        paddingVertival:'0px',
        width:'400px'
    },
	dayHeader: {
		display: 'flex',
		margin: '1px',
		width: '50px',
		height: '50px',
		backgroundColor: 'yellow',
		justifyContent: 'center',
		alignItems: 'center'
	},
	dayInThisMounth: {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		margin: '1px',
		width: '50px',
		height: '50px',
		backgroundColor: 'green',
		justifyContent: 'center',
		alignItems: 'center'
	},
	notInThisMounth: {
		display: 'flex',
		margin: '1px',
		width: '50px',
		height: '50px',
		backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center'
	},
	calendarContainer: {
		fontSize: '10px',
		width: '400px',
		height: '250px',
		display: 'flex',
		padding: '17px',
		flexWrap: 'wrap',
		flexDirection: 'row'
	}
};

export default styles