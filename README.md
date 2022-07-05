# Tasker

My [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm) files.

## Profiles

### [BTConnection](BTConnection.prf.xml)

Profile triggered by any bluetooth connection or disconnection event (filtering by event type and bluetooth device category is handled downstream by LaunchPocketCasts task below).

### [NFCTag](NFCTag.prf.xml)

Profile triggered by any NFC tagging event (I have only one NFC tag today so I am not filtering per tag ID).

## Tasks

### [LaunchInstragram](LaunchInstragram.tsk.xml)

I use this task in a Tasker Task widget to launch Instragran and then use AutoInput to automatically navigate to the Following tab. This shows me only posts from people I follow. No "recommended" content", no ads (so far). This task requires the [AutoInput](https://play.google.com/store/apps/details?id=com.joaomgcd.autoinput) app to be installed and properly configured (but root is not required).

### [LaunchPocketCasts](LaunchPocketCasts.tsk.xml)

I use this task in conjunction with the BTConnection profile above.
That's why the task starts with an IF condition action:
I only want to execute the following actions if the trigger was a bluetooth headset connection or disconnection event.
For this I use a condition based on the BT headphone class ID 1048.
The rest of the task is pretty straightforward:
if the event is a connection being established, I launch PocketCasts and raise the media volume to the max (25).
If instead the event is a disconnection, I mute the media volume.

### [StartBiking](StartBiking.tsk.xml) & [StopBiking](StopBiking.tsk.xml)

This tasks are a work in progress. I am trying to send intents to Google Fit in order to start and stop biking activity recording but so far not luck (suggestions are welcome!). I could use AutoInput to simulate clicks instead of using intent but that doesn't work for my goal to use the task while the screen locked (triggering it with a NFC tag).
