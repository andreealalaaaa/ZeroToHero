package Entities;

import java.util.ArrayList;

public class WishPost {
    private long Id;
    private String post_text;
    private String username;
    private boolean hearted;
    private ArrayList<Comment> comments;

    public WishPost(long id, String post_text, String username, boolean hearted, ArrayList<Comment> comments) {
        Id = id;
        this.post_text = post_text;
        this.username = username;
        this.hearted = hearted;
        this.comments = comments;
    }
}
