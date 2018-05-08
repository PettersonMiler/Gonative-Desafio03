import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from 'store/ducks/users';

import {
  SafeAreaView,
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';

import MapView from 'react-native-maps';

import styles from './styles';

class Map extends Component {
  static propTypes = {
    addUserRequest: PropTypes.func.isRequired,
    addShowModal: PropTypes.func.isRequired,
    users: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
      })),
      loading: PropTypes.bool.isRequired,
      errorOnAdd: PropTypes.oneOfType([null, PropTypes.string]),
      showModal: PropTypes.bool.isRequired,
      inputUser: PropTypes.oneOfType([null, PropTypes.string]),
    }).isRequired,
  };

  state = {
    inputUser: '',
    place: {},
  }

  saveUser = () => {
    if (!this.state.inputUser.length) return;
    this.props.addUserRequest(this.state.inputUser, this.state.place);
  }

  render() {
    console.tron.log(this.props.users);
    return (
      <SafeAreaView style={styles.container}>
        <MapView
          onLongPress={(local) => {
            this.setState({ place: local.nativeEvent.coordinate });
            this.props.addShowModal(true);
          }}
          style={styles.mapView}
          zoomEnabled={false}
          initialRegion={{
            latitude: -27.2177659,
            longitude: -49.6451598,
            latitudeDelta: 0.0042,
            longitudeDelta: 0.0031,
          }}
        >

          { this.props.users.data.map(data => (
            <MapView.Marker
              key={String(data.user.id)}
              title={data.user.name}
              description={data.user.bio}
              coordinate={{
                latitude: data.coordinate.latitude,
                longitude: data.coordinate.longitude,
                latitudeDelta: 0.0042,
                longitudeDelta: 0.0031,
              }}
            >
              <View>
                <Image source={{ uri: data.user.avatar_url }} style={styles.avatar} />
              </View>
            </MapView.Marker>
          ))}
        </MapView>
        <Modal
          transparent
          visible={this.props.users.showModal}
          animationType="fade"
          onRequestClose={() => {
          }}
        >
          <View style={styles.containerModal}>
            <View style={styles.modal}>
              <Text style={styles.tittle}>Adicionar novo local</Text>
              { !!this.props.users.errorOnAdd && (
              <Text style={styles.error}>{this.props.users.errorOnAdd}</Text>
              )}
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Usuário no Github"
                underlineColorAndroid="transparent"
                value={this.props.users.inputUser}
                onChangeText={inputUser => this.setState({ inputUser })}
              />
              <View style={styles.containerButtons}>
                <TouchableOpacity
                  style={styles.buttonCan}
                  onPress={() => { this.props.addShowModal(false); }}
                >
                  <Text style={styles.textButton}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonSav}
                  onPress={this.saveUser}
                >
                  { this.props.users.loading
                ? <ActivityIndicator size="small" color={styles.loading.color} />
                : <Text style={styles.textButton}>Salvar</Text> }
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Map);
