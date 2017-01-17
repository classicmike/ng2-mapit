export class Init {
    load(){
        if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined){
            console.log('No markers found... creating...');
            
            var markers = [
                {
                    name: 'Company 1',
                    lat: 35.6848176,
                    lng: 139.6684521,
                    draggable: true
                },
                {
                    name: 'Tokyo Jikei Association Ika University Dai Three Hospital',
                    lat: 35.6447422,
                    lng: 139.542217,
                    draggable: true
                },
                {
                    name: 'Shimo-kitazawa Station',
                    lat: 35.6584313,
                    lng: 139.6454302,
                    draggable: true
                },
                {
                    name: 'Setagaya Park',
                    lat: 35.6599567,
                    lng: 139.650669,
                    draggable: true
                },
                {
                    name: 'Ōtsuma High School',
                    lat: 35.687018,
                    lng: 139.7434596,
                    draggable: true
                }
            ];
            localStorage.setItem('markers', JSON.stringify(markers));
        } else {
            console.log('Loading Marker');
        }
    }
}