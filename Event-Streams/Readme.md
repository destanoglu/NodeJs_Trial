Event is like Publish/Subscribe logic and onece you subscribe the event, you continuously receive the event (if its fired)
    Executed after each result as they arrive
    Partial results may be received before an error
    emit('event_name', [args]) -> on('event_name', listener)


Callback is just Request/Reply strategy.
    Executed once after all the results arrive
    You may get just result or error.
    
Stream is an extension to Event
    ReadableStream (can be piped to WritableStream)
        readable
        event (data, end, error, close)
        pause()
        resume()
        destroy()
        pipe() (emits the pipe event of WritableStream so manages the orchestration between streams)
    WritableStream
        writable
        event (drain, error, close, pipe)
            resume function of the ReadableStream is called after drain event is emitted
        write()
        end()
        destroy()
        destroySoon()