import { StyleSheet } from 'react-native';
import { colors, metrics, general } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    position: 'absolute',
    height: metrics.screenHeight,
    width: metrics.screenWidth,
  },
  containerModal: {
    flex: 1,
    backgroundColor: colors.modarDark,
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: colors.modal,
    padding: metrics.basePadding,
    margin: metrics.baseMargin,
    borderRadius: metrics.baseRadius,
  },
  tittle: {
    textAlign: 'center',
    color: colors.tittle,
    fontSize: metrics.fontTittle,
    marginBottom: metrics.baseMargin,
  },
  input: {
    borderColor: colors.border,
    borderWidth: metrics.baseBorderWidth,
    borderRadius: metrics.baseRadius,
  },
  containerButtons: {
    marginTop: metrics.marginTopButton,
    flexDirection: 'row',
  },
  buttonCan: {
    ...general.button,
    marginRight: metrics.marginRightButton,
    backgroundColor: colors.cancel,
  },
  buttonSav: {
    ...general.button,
    backgroundColor: colors.save,
  },
  textButton: {
    color: colors.textButton,
    textAlign: 'center',
  },
  loading: {
    color: colors.loading,
  },
  avatar: {
    height: metrics.avatar,
    width: metrics.avatar,
    borderRadius: metrics.borderAvatar,
    borderWidth: metrics.borderAvatarWidth,
    borderColor: colors.avatar,
  },
  error: {
    color: colors.textError,
    textAlign: 'center',
    marginBottom: metrics.marginTextError,
  },
});

export default styles;
