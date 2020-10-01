import metrics from './metrics';
import colors from './colors';
import fonts from './fonts';

const general = {
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  section: {
    margin: metrics.doubleBaseMargin,
  },
  sectionTitle: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: fonts.regular,
    alignSelf: 'center',
    marginBottom: metrics.doubleBaseMargin,
  },
  sectionInput: {
    fontWeight: 'bold',
    fontSize: fonts.regular,
    alignSelf: 'center',
    marginBottom: metrics.baseMargin,
    backgroundColor: colors.containerPrimary,
    padding: metrics.padding1,
    borderRadius: metrics.borderRadius,
    height: 40
  },
  errors: {
    fontSize: fonts.tiny,
    color: colors.err,
    alignSelf: 'center',
    marginBottom: metrics.baseMargin,
  },
};

export default general;
