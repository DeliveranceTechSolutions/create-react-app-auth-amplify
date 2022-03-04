import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap } from 'react-leaflet';
import { Box, Button, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as Leaf from 'leaflet';
import Toolbar from './components/Toolbar/Toolbar';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [46.2305, -119],
      icon: BlueIcon,
      latitude: 0,
      longitude: 0,
      ministerType: 0,
      zoom: 5,
      markers: [
        { 
          coordinates: [46.2305, -121.1], 
          description: "Deliverance Minister", 
          color: GreenIcon
        }, 
        { 
          coordinates: [46.5034, -119], 
          description: "eLeader",
          color: BlueIcon
        },
        { 
          coordinates: [49.5034, -119], 
          description: "eMember",
          color: OrangeIcon
        }
      ]
    }

    const LeafIcon = Leaf.Icon.extend({
      options: {}
    });

    const BlueIcon = new LeafIcon({
      iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
      iconSize: [10, 16],
      iconAnchor: [12, 41],
      popupAnchor: [-6, -42],
      shadowSize: [41, 41]
    });

    const GreenIcon = new LeafIcon({
      iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
      iconSize: [10, 16],
      iconAnchor: [12, 41],
      popupAnchor: [-6, -42],
      shadowSize: [41, 41]
    });


    const OrangeIcon = new LeafIcon({
      iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png",
      iconSize: [10, 16],
      iconAnchor: [12, 16],
      popupAnchor: [-6, -42],
      shadowSize: [41, 41]
    });
  }

  render() {

    return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
          <div>
            <MapContainer center={this.state.position} zoom={5} minZoom={5} style={{height: '100vh'}} zoomControl={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                opacity={0.5}
                zIndex={10}
              />
                <Toolbar />
              <Box style={{marginTop: '10%'}}>
                <ZoomControl position={'bottomright'}/>

              </Box>
              {
                this.state.markers.map(marker => {
                  return(
                    <Marker 
                      icon={marker.color} 
                      position={marker.coordinates} 
                      key={123 + marker.coordinates[0]}>
                      <Popup style={{backgroundColor: marker.color}}>
                        {marker.description}
                      </Popup>
                    </Marker>
                  )
                })
              }
            </MapContainer>
          </div>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App);
