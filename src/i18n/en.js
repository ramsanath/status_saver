export default {
    // other
    appName: "WhatsApp Status Saver",

    // Titles
    permissionTitle: "WhatsApp Status Saver Storage Permission",
    permissionsDescription: "WhatsApp Status Saver needs access to your Storage so that you can save WhatsApp status to your device.",

    // messages
    statusSaveSuccessMsg: 'Saved to device',
    statusSaveFailureMsg: 'Unable to save the media to device',
    shareFailureMsg: 'Unable to share the media.',

    components: {
        permissionBox: {
            grantedMessage: 'You have given all the required permisisons you can use the app now.',
            deniedMessage: 'You have denied storage permission for this app without which this app cannot function properly.',
        }
    },

    titles: {
        deleteStatus: 'Delete Confirmation',
    },

    messages: {
        deleteStatus: 'Are you sure you want to delete the status? This is a non reversible process.',
        deleteMultipleStatus: 'Are you sure you want to delete the selected statuses? This is a non reversible process.',
        saveSuccess: 'Saved',
        saveFailure: 'Unable to save'
    },

    labels: {
        whatsappStatus: 'WhatsApp Statuses',
        gbWhatsappStatus: 'GBWhatsApp Statuses',
        whatsappBusinessStatus: 'WhatsApp Business Statuses',
        fileInfo: 'File Information',
        name: "Name",
        size: 'Size',
        location: 'Location',
        lastModified: 'Last Modified',
        delete: 'Delete',
        cancel: 'Cancel'
    },

    screens: {
        whatsApp: {
            photoStatusTitle: 'Photos',
            videoStatusTitle: 'Videos',
            titles: {
                noStatus: 'No Status Available'
            },
            messages: {
                noStatus: '%{type} status folder not found.\nPlease make sure you have the app and you have viewed any status before trying again.'
            }
        },
        howtouse: {
            title: 'How To Use',
            steps: '1. Open WhatsApp and watch any status\n\n2. Then come back to this app and open the viewed status\n\n3. Press the save icon to save the status to your device :)',
            faqTitle: 'FAQ',
            faqContent: `1. My status are not displayed in the app:\nThis happens especially for video statuses. Watch the video completely and the check back again.\n\n2. The status I saved is not appearing in the gallery:\nGallery takes a while to load new media from the storage. Just wait for a while, your status is saved already :)\n\n3. Where are the status saved ?\nThe status are saved in the 'WhatsApp Status' folder in your internal storage.\n\n4. How do I save or share multiple status ?\nLong press any status to enter multi select mode. From there you can save or share multiple statuses at once.`,
            sendFeedback: 'Have any feedback or query ?',
        }
    }
}