import { connect } from 'react-redux';
import { getConfigValue } from '../../utils'
import HomeBannerComponent from './home-banner.component'

const mapStateToProps = ({ siteConfig }) => {
  return {
    backgroundImage: getConfigValue(siteConfig, 'images.background'),
    motto: getConfigValue(siteConfig, 'content.home.banner.motto'),
    subtitle: getConfigValue(siteConfig, 'content.home.banner.subtitle'),
    helpWantedTitle: getConfigValue(siteConfig, 'content.home.banner.help_wanted.title'),
    helpWantedDescription: getConfigValue(siteConfig, 'content.home.banner.help_wanted.description'),
    helpWantedButton: getConfigValue(siteConfig, 'content.home.banner.help_wanted.button'),
    issueUrl: getConfigValue(siteConfig, 'content.home.banner.issue_url'),
    searchDescriptionText: getConfigValue(siteConfig, 'content.home.banner.search_description_text'),
    searchDescriptionTextMobile: getConfigValue(siteConfig, 'content.home.banner.search_description_text_mobile'),
    searchPlaceholder: getConfigValue(siteConfig, 'content.home.banner.search_placeholder_text'),
    browseByText: getConfigValue(siteConfig, 'content.home.banner.browse_by_text')
  }
}

export default connect(mapStateToProps)(HomeBannerComponent)