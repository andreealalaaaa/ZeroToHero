package Entities;

import java.util.ArrayList;

public class WishList {
    private ArrayList<WishPost> wishPosts;
    private User user;


    public WishList(ArrayList<WishPost> wishPosts, User user) {
        this.wishPosts = wishPosts;
        this.user = user;
    }
}
