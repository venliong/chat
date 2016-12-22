import React from 'react';
import RobotConversation from './Conversations/Conversation.Robot';
import ChatConversation from './Conversations/Conversation.Chat';

import styles from './MainPanel.css';
import { connect } from 'dva';


export default connect(props => ({
  list: props.conversations.list,
  active: props.conversations.active,
  robotParams: props.robotParams,
}))(props => {
  return <div className={styles.mainPanel}>
    {props.list.map((conversation, idx) => {
      const PanelComponent = conversation.sessionType === 'robot' ? RobotConversation : ChatConversation;
      return <PanelComponent
        {...props}
        {...conversation}
        key={conversation.cid}
        active={idx === props.active}
      />;
    })}
  </div>;
});
