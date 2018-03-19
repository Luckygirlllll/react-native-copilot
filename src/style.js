// @flow
import { StyleSheet } from 'react-native';

export const STEP_NUMBER_RADIUS: number = 0;
export const STEP_NUMBER_DIAMETER: number = STEP_NUMBER_RADIUS * 2;
export const ZINDEX: number = 100;
export const MARGIN: number = 13;
export const OFFSET_WIDTH: number = 4;

export default StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    borderRadius: 0,
    zIndex: ZINDEX,
  },
  arrow: {
    position: 'absolute',
    borderColor: 'transparent',
    borderWidth: 5,
  },
  tooltip: {
    position: 'absolute',
    paddingTop: 30,
    paddingHorizontal: 30,
    backgroundColor: "#e8436f",
    borderRadius: 3,
    overflow: 'hidden',
    borderRadius: 10,
  },
  tooltipText: {
    color: '#FFFFFF',
  },
  stepNumber: {
    position: 'absolute',
    width: STEP_NUMBER_DIAMETER,
    height: STEP_NUMBER_DIAMETER,
    borderWidth: 2,
    borderRadius: STEP_NUMBER_RADIUS,
    borderColor: '#FFFFFF',
    backgroundColor: "#e8436f",
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: ZINDEX + 1,
  },
  stepNumberText: {
    fontSize: 10,
    backgroundColor: 'transparent',
    color: '#FFFFFF',
  },
  button: {
    padding: 10,
    backgroundColor: "#e8436f",
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  bottomBar: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  overlayRectangle: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.2)',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
});
