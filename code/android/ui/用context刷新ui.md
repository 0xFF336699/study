https://stackoverflow.com/questions/11123621/running-code-in-main-thread-from-another-thread




NOTE: This answer has gotten so much attention, that I need to update it. Since the original answer was posted, the comment from @dzeikei has gotten almost as much attention as the original answer. So here are 2 possible solutions:

**1. If your background thread has a reference to a `Context` object:**

Make sure that your background worker threads have access to a Context object (can be the Application context or the Service context). Then just do this in the background worker thread:

```java
// Get a handler that can be used to post to the main thread
Handler mainHandler = new Handler(context.getMainLooper());

Runnable myRunnable = new Runnable() {
    @Override 
    public void run() {....} // This is your code
};
mainHandler.post(myRunnable);
```

**2. If your background thread does not have (or need) a `Context` object**

(suggested by @dzeikei):

```java
// Get a handler that can be used to post to the main thread
Handler mainHandler = new Handler(Looper.getMainLooper());

Runnable myRunnable = new Runnable() {
    @Override 
    public void run() {....} // This is your code
};
mainHandler.post(myRunnable);
```