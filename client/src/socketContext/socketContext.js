import React, { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext = createContext();

// const socket = io('http://localhost:5000');
// const socket = io('https://web-chat-app-i-see-you.herokuapp.com/');
const socket = io('https://video-chat-serv.herokuapp.com/'); //new server

const ContextProvider = ({ children }) => {
  const [stream, setStream] = useState(null);
  const [me, setMe] = useState('');
  const [call, setCall] = useState({});
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState('');
  const [error, setError] = useState({});

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  const getMedia = async () => {
    try {
      const currentStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      setStream(currentStream);

      setTimeout(() => {
        myVideo.current.srcObject = currentStream;
      }, 0);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getMedia();

    socket.on('me', (id) => {
      setMe(id);
    });

    socket.on('calluser', ({ from, name: callerName, signal }) => {
      setCall({
        isRecivedCall: true,
        from,
        callerName: callerName || 'Anonym',
        signal,
      });
    });
  }, []);

  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('answercall', { signal: data, to: call.from });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('calluser', {
        userToCall: id,
        signalData: data,
        from: me,
        name,
      });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.on('callaccepted', (signal) => {
      setCallAccepted(true);

      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);

    connectionRef.current.destroy();

    window.location.reload();
  };

  return (
    <SocketContext.Provider
      value={{
        call,
        callAccepted,
        myVideo,
        userVideo,
        stream,
        name,
        setName,
        callEnded,
        me,
        callUser,
        answerCall,
        leaveCall,
        error,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };
