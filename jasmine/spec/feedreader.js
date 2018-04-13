/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
$(function() {
    /* This suite is all about the RSS feeds definitions, 
    the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has a URL and that URL is not empty', function() {
            allFeeds.forEach((feed) => {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe(0);
            });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has a name and that name is not empty', function() {
            allFeeds.forEach((feed) => {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe(0);
            });
        });
    });
    
    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {    
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. 
         */
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */
        it('shows up when click on the menu icon', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
        });
        
        it('hides when click again', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            setTimeout(function() {
                loadFeed(0, done);
            }, 1000);
        });

        it('has at least one entry', function(done) {
            expect($('.feed').children().length).not.toBe(0); 
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        let feedContent;    
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                feedContent = $('.feed').html();
                done();
            });           
        });

        it ('changes content', function(done) {
            loadFeed(1, function() {
                expect($('.feed').html()).not.toEqual(feedContent);
                done();
            });
        });
    });

}());
