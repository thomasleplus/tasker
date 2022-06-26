# Tasker

My Tasker files.

## Profiles

### [BTConnection](BTConnection.prf.xml)

Profile triggered by any bluetooth connection or disconnection event (filtering by event type and bluetooth device category is handled downstream by LaunchPocketCasts task below).

### [NFCTag](NFCTag.prf.xml)

Profile triggered by any NFC tagging event (I have only one NFC tag today so I am not filtering per tag ID).

## Tasks

### [LaunchPocketCasts](LaunchPocketCasts.tsk.xml)

I use this task in conjunction with the BTConnection profile above. That's why the task starts with an IF condition action: I only want to execute the following actions if the trigger was a bluetooth connection event (vs a bluetooth disconnection event) and if the bluetooth device is in the headphone class ID 1048 (vs a smartwatch or something else).

The rest of the task is pretty straightforward:
1. Launch PocketCasts.
2. Wait 3 seconds.
3. Turn up the media volume to the max (25).

### [StartBiking](StartBiking.tsk.xml) & [StopBiking](StopBiking.tsk.xml)

This tasks are a work in progress. I am trying to send intents to Google Fit in order to start and stop biking activity recording but so far not luck (suggestions are welcome!).
