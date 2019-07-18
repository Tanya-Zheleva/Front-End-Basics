import { List, Card, Icon } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import deletePost from '../redux/actions/deletePost';

class CustomList extends React.Component {
    handleDelete = (event) => {
        console.log(event.target.parentNode.parentNode.parentNode.parentNode.childNodes[0].textContent);
        const payload = {
            postTitle: event.target.parentNode.parentNode.parentNode.parentNode.childNodes[0].textContent
        };

        this.props.deletePost(payload);
    }

    render() {
        return (
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={this.props.posts}
                renderItem={post => (

                    <List.Item>
                        <Card title={Object.keys(post)[0]}
                            extra={<Icon type="delete" theme="filled" onClick={this.handleDelete} />}>
                            {post[Object.keys(post)[0]]}
                        </Card>
                    </List.Item>
                )}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
}

const mapDispatchToProps = {
    deletePost,
};


export default connect(mapStateToProps, mapDispatchToProps)(CustomList);